import "./styles/theme.css";
import "./App.css";
import Topbar from "./components/topbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Chat from "./pages/chat.jsx";
import Profile from "./pages/profile.jsx";
import Notifications from "./pages/notifications.jsx";
import EditProfile from "./pages/edit-profile.jsx";
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
      </Routes>
    </>
  );
}

export default App;
