import { Grid, TextField, Box, Typography, styled, Paper, Div } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
export default function CreateEventForm() {

    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: 'rgb(94 105 114)',
        padding: theme.spacing(1),
      }));
    const formData = useState({name: '', description:''})

  return (
    
    <>
    <Box sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }} >
        <Div style={{textAlign: 'center', fontSize: '1.5rem'}}>
            Create Event
        </Div>
        <Grid container direction="column" justifyContent="center"  alignItems="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} style={{marginBottom: '5%'}}>
                <TextField label="Event Name" variant="standard" value={formData.name}/>
            </Grid>
            <Grid item xs={12} style={{marginBottom: '5%'}}>
                <TextField label="Description" variant="standard" multiline maxRows={4}value={formData.description}/>
            </Grid>
            <Grid item xs={12} style={{marginBottom: '5%'}}>
                <TextField label="Standard" variant="standard" />
            </Grid>
            <Grid item xs={12} style={{marginBottom: '5%'}}>
                <TextField label="Standard" variant="standard" />
            </Grid>
            <Grid item xs={12} style={{marginBottom: '5%'}}>
                <TextField label="Filled" variant="filled" />
            </Grid>
            <Grid item xs={12} style={{marginBottom: '5%'}}>
            <Link to="/"> back to home page</Link>
            </Grid>
        </Grid>
    </Box>
    </>
  );
}