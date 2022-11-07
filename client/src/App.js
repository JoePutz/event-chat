import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import EventPage from "./Components/EventPage";
import CreateEventPage from "./Components/CreateEventPage";
import { UserProvider} from "./Context/User"
import LoginForm from "./Components/LoginForm";
import NavBar from "./Components/NavBar";

function App() {

  return (
    <>
    <NavBar />
    <UserProvider>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="events" element={<EventPage />} />
        <Route path="create-event" element={<CreateEventPage />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
    </>
  );
}

export default App;
