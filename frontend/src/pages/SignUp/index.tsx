import { Alert, Box, Button, Card, CardContent, Snackbar, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../@types";
import { LoadingButton } from "@mui/lab";
import { useAuth } from "../../hook/useAuth";

import '../../assets/css/sign.css';

function SignUpPage() {

    const navigate = useNavigate();

    const {register} = useAuth();

    const [userForm, setUserForm] = useState<IUser>(
        {
            fullname: '',
            username: '',
            password: '',
            description: ''
        }
    );

    //State - Loading
    const [loading, setLoading] = useState(false)

    //State - Messages
    const [messageError, setMessageError] = useState('');
    const [messageSuccess, setMessageSuccess] = useState('');

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();

        setLoading(true);

        try {
            await register(userForm);
            navigate('/');

        } catch (e) {
            const error = e as Error;
            setMessageError(String(error.message));
            console.error('ERROR: ', String(error.message));
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box id="sign-up-page" className="sign-page">
            <form onSubmit={handleSignUp}>
                <Card>
                    <CardContent className="sign-content">
                        <Typography variant="h5">
                            Crie uma Conta
                        </Typography>
                        <Typography variant="subtitle1">
                            Ainda não tem uma conta TOPIC?
                        </Typography>

                        <TextField label="Nome Completo"
                            required
                            fullWidth
                            value={ userForm.fullname }
                            onChange={event => setUserForm({...userForm, fullname: (event.target as HTMLInputElement).value})} />

                        <TextField label="Usuário"
                            required
                            fullWidth
                            value={ userForm.username }
                            onChange={event => setUserForm({...userForm, username: (event.target as HTMLInputElement).value})} />

                        <TextField label="Senha"
                            required
                            fullWidth
                            type="password"
                            value={ userForm.password }
                            onChange={event => setUserForm({...userForm, password: (event.target as HTMLInputElement).value})} />

                        <LoadingButton type="submit"
                            variant="contained"
                            size="large"
                            loading={loading}>
                            Criar
                        </LoadingButton>

                        <Box className="sign-separator">
                            <Box className="traco"></Box>
                            <Typography component="h5">OU</Typography>
                            <Box className="traco"></Box>
                        </Box>                            

                        <Typography variant="h5">
                            Faça o Login
                        </Typography>
                        <Typography variant="subtitle1">
                            
                        </Typography>
                        <Button 
                            variant="outlined"
                            size="large"
                            onClick={() => navigate('/signin') }>
                            Acessar Conta
                        </Button>

                    </CardContent>
                </Card>
            </form>
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

            <Snackbar 
                open={Boolean(messageSuccess)}
                autoHideDuration={600}
                anchorOrigin={{vertical:'top', horizontal: 'right'}}>
                
                <Alert severity="success"  
                variant="filled"
                onClose={() => setMessageSuccess('')}>
                    {messageSuccess}
                </Alert>

            </Snackbar>
        </Box>
    )
}

export default SignUpPage;