import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Challenges from "./pages/Challenges";
import Help from "./pages/Help";
import MyEvie from "./pages/MyEvie";
import Calendar from "./pages/Calendar";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/help" element={<Help />} />
        <Route path="/myevie" element={<MyEvie />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
