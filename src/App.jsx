import "./styles/theme.css";
import "./App.css";
import Topbar from "./components/topbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Chat from "./pages/chat.jsx";
import Profile from "./pages/profile.jsx";
import Notifications from "./pages/notifications.jsx";
import EditProfile from "./pages/edit-profile.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx";
import ProfileGreenFlags from "./pages/profile-green-flags.jsx";
import ProfileRedFlags from "./pages/profile-red-flags.jsx";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/greenflags" element={<ProfileGreenFlags />} />
        <Route path="/redflags" element={<ProfileRedFlags />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
