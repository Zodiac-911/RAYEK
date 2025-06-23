import "./App.css";
import Topbar from "./components/topbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Chat from "./pages/chat.jsx";
import Profile from "./pages/profile.jsx";
import Notifications from "./pages/notifications.jsx";
import "./styles/theme.css";
function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </>
  );
}

export default App;
