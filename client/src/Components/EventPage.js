import { Grid, Box, Paper, styled, createTheme} from "@material-ui/core"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import { useParams, useNavigate } from 'react-router-dom';


function EventPage () {
    const [inCall, setInCall] = useState(false);
    const [ event, setEvent ] = useState([])
    let { id } = useParams();
    const [ refresh, setRefresh ] = useState(false)

    useEffect(() => {
        fetch(`/events/${id}`)
          .then((response) => response.json())
          .then((data) => setEvent(data));
    }, [refresh]);

    function handleCommentDelete(commentID) {
        fetch(`/comments/${commentID}`,{
            method: "DELETE"
       })
       .then(()=> setRefresh(!refresh))
    }

    function handleReplyClick(commentID) {
        //I'm thinking we place an @comment.user automatically to the front of where you type your comments?
    }

    // const darkTheme = createTheme({
    //     palette: {
    //         mode: 'dark',
    //         text: {
    //             primary: '#fff',
    //             secondary: '#fff'
    //         }
    //     },
    // })
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));

    return (
        <>
        {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs ={6}>
                <Item > Event page </Item>
            </Grid>
            <Grid item xs ={6}>
                <Item>
                <Link to="/"> back to home page</Link>
                </Item>
            </Grid>
            <Grid item xs ={6}>
                <Item>
                <div className="App" style={{ height: "100%" }}>
                {inCall ? (
                    <VideoCall setInCall={setInCall} />
                ) : (
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setInCall(true)}
                    >
                    Join Call
                    </Button>
                )}
                </div>
                </Item>
            </Grid>
        </Grid>
        </Box> */}
        </>
    )
}


export default EventPage