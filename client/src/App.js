import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import EventPage from "./Components/EventPage";
import CreateEventPage from "./Components/CreateEventPage";
import { useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { Button } from "@material-ui/core";
import VideoCall from "./Components/VideoCall";

function App() {
  const [inCall, setInCall] = useState(false);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="events" element={<EventPage />} />
    //     <Route path="create-event" element={<CreateEventPage />} />
    //   </Routes>

    // </BrowserRouter>
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
  );
}

export default App;
