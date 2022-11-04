import { Link } from "react-router-dom";
import { Grid, Toolbar, AppBar, Typography, CssBaseline, Container, Box} from "@material-ui/core"
import React from "react";
import CreateEventForm from "./CreateEventForm";

function CreateEventPage() {
    return (
        <>
        <Container maxWidth="sm" sx={{ mb: 4}} style={{marginTop: "15%",  justifyContent: 'center'}}>
            <Box sx={{ bgcolor: 'white', height: '50vh'}}>
                <CreateEventForm/>
            </Box>
        </Container>
        </>
    )
}

export default CreateEventPage

