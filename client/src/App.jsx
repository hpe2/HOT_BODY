
import { Route, Routes } from "react-router-dom";
import Home from "./pages/root/Home";
import Wrapper from './components/user/Wrapper';
import Update from "./pages/user/Update";import Profile from "./pages/user/Profile";
import Wrote from "./pages/user/Wrote";
import Point from './pages/user/Point';
import Login from "./pages/root/auth/Login";
import Signup from "./pages/root/auth/Signup";
import Community from "./pages/root/community/Community";
import Navbar from "./components/Navbar";
import CommunityPosting from "./pages/root/community/CommunityPosting";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css';



const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        theme="light"
        pauseOnHover
        autoClose={2000}
      />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* community */}
          <Route path="/community" element={<Community />} />
          <Route path="/community/write" element={<CommunityPosting />} />

          {/* profile */}
          <Route element={<Wrapper />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/update" element={<Update />} />
            <Route path="/profile/wrote" element={<Wrote />} />
            <Route path="/profile/pt" element={<Update />} />
            <Route path="/profile/point" element={<Point />} />
            <Route path="/gogaek" element={<Update />} />
          </Route>
          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  );
};

export default App;
