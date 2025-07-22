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
import ProfileRedFlagssssasjdkhakjs from "./pages/profile-red-flags.jsx";
import { PocketBaseProvider } from "./context/PocketBaseProviders.jsx";
import { GuestGuard } from "./components/guards/GuestGuard.jsx";
import { AuthGuard } from "./components/guards/AuthGuard.jsx";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfileOtherUsers from "./pages/profile-other-users.jsx";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Topbar />
        <PocketBaseProvider>
          <Routes>
            <Route element={<AuthGuard />}>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/greenflags" element={<ProfileGreenFlags />} />
              <Route
                path="/redflags"
                element={<ProfileRedFlagssssasjdkhakjs />}
              />
              <Route path="/profile/id:" element={<ProfileOtherUsers />} />
            </Route>

            <Route element={<GuestGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Routes>
        </PocketBaseProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
