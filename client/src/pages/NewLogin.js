import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

//MUI styling imports
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';

function NewLogin(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
        console.log(formState)
    };

    const handleChange = (name, value) => {
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <Grid container rowSpacing={3} justify content="center" alignItems="center">
                <Grid item xs={10} >
                    <Paper sx={{ bgcolor: 'white', width: '40vw', mt: 10 }} >
                        <Typography sx={{ ml: 2 }} variant="h6" justify content="center" alignItems="center">
                            Log In
                        </Typography>

                        <FormGroup aria-label="position" row>
                            <Grid container justify content="center" alignItems="center">
                                <Grid container >
                                    <Grid item sx={{ ml: 3, mb: 3 }} xs={10}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            id="filled-password-input"
                                            label="Username"
                                            type="username"
                                            variant="filled"
                                            onChange={(event) => handleChange('username', event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item sx={{ ml: 3, mb: 3 }} xs={10}>
                                        <TextField
                                            sx={{ width: '100%' }}
                                            id="filled-password-input"
                                            label="Password"
                                            type="password"
                                            variant="filled"
                                            onChange={(event) => handleChange('password', event.target.value)}
                                        />
                                    </Grid>


                                    <Grid item sx={{ ml: 3, mb: 3 }} xs={10} >
                                        <Button onClick={handleFormSubmit} variant="contained">Log In</Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    )
}

export default NewLogin