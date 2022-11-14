import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function EventCard( {event} ) {
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/eventpage/:id')
    }

    return (
        <Paper variant="outlined" onClick={handleClick} >
            <Grid container>
                <Grid item xs={.5}>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h5">
                            {event.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <Grid item >
                                    {event.public === false ?
                                    <Typography variant="caption">
                                        Private
                                    </Typography>     
                                    :<></>}                               
                                </Grid>
                                {event.tags.map((tag) => {
                                    <Grid item>
                                        <Button size="small">{tag}</Button>
                                    </Grid>
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )

}

export default EventCard

