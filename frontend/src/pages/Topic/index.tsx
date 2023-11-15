import { Alert, Box, Fab, Snackbar, Tab, Tabs, TextField } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicList";
import { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { getProfileByUsername, getTopicsByUsername } from "../../services";
import { IUser } from "../../@types";
import AddIcon from '@mui/icons-material/Add'

function TopicPage() {

  //Profile
  const { user } = useAuth();
  const params = useParams();

  const [profile, SetProfile] = useState<IUser>({});
  
  //State - Error Message
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  
  //TOPICS
  const [profileTopics, setProfileTopics] = useState([]);
  const [topics, setTopics] = useState([]);

  //TABS
  const [tab, setTab] = useState(1);
  function handleTabChange(event: SyntheticEvent, newValue: number){
    setTab(newValue);
  }

  //NEW TOPIC
  const [showForm, SetShowForm] = useState(false)

  function handleShowForm() {
    SetShowForm(true);
  }

  useEffect(() => {

    const username = params.username ? params.username : user?.username;
    if (username) {
      getProfileByUsername(username)
      .then(result => {
        SetProfile(result.data);

        return getTopicsByUsername(username)
        .then(result => { 
          setProfileTopics(result.data)
        });
      })
      .catch(error => {
        setMessageError(String(error.message));
      })
    }

  }, [])

  useEffect(() => {
    if (tab == 1){
      getTopicsByUsername()
        .then(result => { 
          setTopics(result.data)
        })
        .catch(error => {
          setMessageError(String(error.message));
        })
    }
  }, [tab])

  return (
    <Box
      id="topic-page"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
    >
      <HeaderProfile user={profile} />

      <Box className="topic-page-content" style={{width: '64rem'}}>

        {profile?.id == user?.id && (
          <Tabs value={tab} onChange={handleTabChange}>
              <Tab value={1} label="Tópicos" />
              <Tab value={2} label="Meus Tópicos" />
          </Tabs>
        )}

        {tab == 2 ? (
          <Box display="flex" flexDirection="column" alignItems="end">     
            {!showForm && (
              <Fab color="primary" style={{marginTop: '-3.5rem'}}
              onClick={handleShowForm}>
                <AddIcon />
              </Fab>
            )}   

            {showForm && (
              <Box display="flex" flexDirection="column" alignItems="end"
                gap={3} style={{marginTop: '2rem', width: '100%'}}> 

                <TextField 
                  label="Novo Tópico"
                  placeholder="No que voce está pensando"
                  multiline
                  fullWidth
                  required
                  rows={4}
                  inputProps={{maxLength: 250}}
                  />

                <Box> 

                </Box>

              </Box>  
            )} 
            
            <TopicList items={profileTopics} />

          </Box>
        ): (
          <TopicList items={topics} /> 
        )}

      </Box>

      <Snackbar
          open={Boolean(messageError)}
          autoHideDuration={600}
          anchorOrigin={{vertical:'top', horizontal: 'right'}}>
          
          <Alert severity="error" 
          variant="filled"
          onClose={() => setMessageError('')}>
              {messageError}
          </Alert>

      </Snackbar>
    </Box>
  );
}

export default TopicPage;