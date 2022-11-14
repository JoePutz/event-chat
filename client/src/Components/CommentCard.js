import React, { useEffect, useState } from 'react'
import {useContext} from "react";
import {UserContext} from "../Context/User"
import IconButton from "@mui/material/IconButton";
import ReplyIcon from '@mui/icons-material/Reply';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function CommentCard( {comment, handleCommentDelete, handleReplyClick} ) {
    const {user, logout} = useContext(UserContext)

    return (
        <Paper 
            variant="outlined"
            sx={{
                margin: 'auto'
            }}
        >
            <Grid container spacing={2} justifyContent="flex-end">
                <Grid item xs={11.5}>
                    <Typography variant="button" display="block">
                        {comment.user}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {comment.text} 
                    </Typography>
                </Grid>
                <Grid item xs={.5}>
                    {user && user.id === comment.com_user_id ?
                    <IconButton
                       onClick={handleCommentDelete}
                    >
                        <ClearIcon />
                    </IconButton>
                    : null}
                    {user && user.id ==! comment.com_user_id ? 
                    <IconButton
                        onClick={handleReplyClick}
                    >
                        <ReplyIcon />
                    </IconButton> 
                    : null}
                </Grid>
            </Grid>
        </Paper>
    )

}

export default CommentCard