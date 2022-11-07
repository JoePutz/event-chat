import { Grid, TextField, Box, styled, Button, Container} from '@material-ui/core';
import React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../Context/User';
import { Link } from 'react-router-dom';
const LoginForm = function(){
    const {login, logout} = useContext(UserContext)
    const [formData, setFormData] = useState({
        password: '',
        username: ''
    })
    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: 'rgb(94 105 114)',
        padding: theme.spacing(1),
      }));
    const handleSubmit = (e) => {
        e.preventDefault()
        login(formData)
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]:e.target.value})
    }
    return (
        <Container maxWidth="sm" sx={{ mb: 4}} style={{marginTop: "15%",  justifyContent: 'center'}}>
        <Box sx={{ bgcolor: 'white', height: '50vh'}}>
        <Box sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }} >
            <Div style={{textAlign: 'center', fontSize: '1.5rem'}}>
                Login
            </Div>
            <Grid container direction="column" justifyContent="center"  alignItems="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} style={{marginBottom: '5%'}}>
                    <TextField label='Username' id='username' variant="standard" value={formData.username} onChange={e => handleChange(e)}/>
                </Grid>
                <Grid item xs={12} style={{marginBottom: '5%'}}>
                    <TextField label='Password' type="password" id='password' variant="standard" value={formData.password} onChange={e => handleChange(e)}/>
                </Grid>
                <Grid item xs={6} style={{marginBottom: '5%'}}>
                    <Button onClick={(e) => handleSubmit(e)}>login</Button>
                    <Button onClick={() => logout()}>logout</Button>
                </Grid>
                <Link to="/"> back to home page</Link>
            </Grid>
        </Box>
        </Box>
        </Container>
      );
}

export default LoginForm