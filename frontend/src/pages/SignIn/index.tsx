import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICredential } from "../../@types";
import { LoadingButton } from "@mui/lab";

function SignInPage() {

    const navigate = useNavigate();

    const [credential, setCredential] = useState<ICredential>(
        {
            username: '',
            password: ''
        }
    );

    //State - Loading
    const [loading, setLoading] = useState(false)

    //State - Error Message
    const [messageError, setMessageError] = useState('');

    function handleSignIn(event: FormEvent) {
        event.preventDefault();

        setLoading(true);

        try {
            //TO-DO: Call endpoint from backend /auth/signin
        } catch (e) {
            const error = e as Error;
            setMessageError(String(error.message));
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box id="sign-in-page">
            <form onSubmit={handleSignIn}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">
                            Faça o Login
                        </Typography>
                        <Typography variant="subtitle1">
                            Já tem uma conta TOPIC?
                        </Typography>

                        <TextField label="Usuário"
                            required
                            fullWidth
                            value={ credential.username }
                            onChange={event => setCredential({...credential, username: (event.target as HTMLInputElement).value})} />

                        <TextField label="Senha"
                            required
                            fullWidth
                            type="password"
                            value={ credential.password }
                            onChange={event => setCredential({...credential, password: (event.target as HTMLInputElement).value})} />

                        <LoadingButton type="submit"
                            variant="contained"
                            size="large"
                            loading={loading}>
                            Entrar
                        </LoadingButton>
                            

                        <Typography variant="h5">
                            Crie uma Conta
                        </Typography>
                        <Typography variant="subtitle1">
                            Ainda não tem uma conta TOPIC?
                        </Typography>
                        <Button 
                            variant="outlined"
                            size="large"
                            onClick={() => navigate('/signup') }>
                            Criar Conta
                        </Button>

                    </CardContent>
                </Card>
            </form>
        </Box>
    )
}

export default SignInPage;