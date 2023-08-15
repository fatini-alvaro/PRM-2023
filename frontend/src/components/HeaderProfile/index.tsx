import { Avatar, Box, Typography } from '@mui/material'

//import de imagens
import banner from '../../assets/img/profile_banner.png';
import avatar from '../../assets/img/profile_avatar.jpg';
import { CalendarMonthOutlined } from '@mui/icons-material';

//import do Estilo 
import './style.css'

function HeaderProfile () {

  return (
    <div className="header profile">
      <Box id="header-profile">

        <Box className="header-profile-background">
          <img src={banner}/>
        </Box>

        <Box className="header-profile-detail">
          <Avatar alt="Fulano de Tal" style={{width:128,height:128}}
                  src={avatar} className="header-profile-detail-avatar"/>

          <Box className="header-profile-detail-text">
            <Typography variant="h5">
              Fulano de Tal
            </Typography>

            <Typography variant="subtitle1" component="h6">
              @fulanodeTal
            </Typography>

            <Typography variant="subtitle1" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium, similique quos nobis ad repellat deleniti unde, soluta voluptatibus earum possimus, fugit tenetur ullam deserunt quod autem eius vel magni?
            </Typography>

            <Typography variant="caption" component="span">
              <CalendarMonthOutlined />
              Entrou em Agosto de 2023   
            </Typography>  
          </Box>
        </Box>

      </Box>    
    </div>
  )

}

export default HeaderProfile;