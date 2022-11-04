import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import EventPage from "./Components/EventPage";
import CreateEventPage from "./Components/CreateEventPage";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<EventPage />} />
        <Route path="create-event" element={<CreateEventPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
