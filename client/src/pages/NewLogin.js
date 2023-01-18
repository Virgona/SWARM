import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

//MUI styling imports
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Image from 'mui-image'

function NewLogin(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <Paper component="form" raised={true} sx={{ width: '100%', mt: 5, bgcolor: "white" }}>
                <Typography sx={{ mt: 5, ml: 2 }} variant="h6">
                    Work Order
                </Typography>

                <FormGroup aria-label="position" row >
                    <Grid container column spacing={{ xs: 1, sm: 2, md: 3 }} justify content="center" alignItems="center">
                        <Image src='swar-logo.png' />
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" label="Accessability" variant="filled" />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" label="Contractor" variant="filled" />
                        </Grid>
                    </Grid>
                </FormGroup>
            </Paper>
        </Container>
    );
}

export default NewLogin