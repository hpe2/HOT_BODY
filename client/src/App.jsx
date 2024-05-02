
import { Route, Routes } from "react-router-dom";
import Home from "./pages/root/Home";
import Wrapper from './components/user/Wrapper';
import Profile from "./pages/user/Profile";
import Wrote from "./pages/user/Wrote";
import Point from './pages/user/Point';
import PointRoulette from './pages/user/PointRoulette';
import Login from "./pages/root/auth/Login";
import Signup from "./pages/root/auth/Signup";
import Community from "./pages/root/community/Community";
import Navbar from "./components/Navbar";
import CommunityPosting from "./pages/root/community/CommunityPosting";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import CommunityPostDetail from './pages/root/community/CommunityPostDetail';
import CommunityEditPost from './pages/root/community/CommunityEditPost';
import Terms from "./pages/root/Terms";
import Privacy from "./pages/root/Privacy";
import PT from "./pages/root/PT";
import Subscribe from "./pages/root/Subscribe";






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
          <Route path='/community/detail/:id' element={<CommunityPostDetail />} />
          <Route path='/community/edit/:id' element={<CommunityEditPost />} />

          {/* profile */}
          <Route element={<Wrapper />}>
            <Route path="/profile/account" element={<Profile />} />
            <Route path="/profile/wrote" element={<Wrote />} />
            <Route path="/profile/pt" element={<Profile />} />
            <Route path="/profile/group" element={<Profile />} />
            <Route path="/profile/point" element={<Point />} />
            <Route path="/profile/point/roulette" element={<PointRoulette />} />
            <Route path="/gogaek" element={<Profile />} />
          </Route>
          {/*membership*/}
          < Route path="Terms" element={<Terms />} />
          < Route path="Privacy" element={<Privacy />} />
          < Route path="PT" element={<PT />} />

          < Route path="Subscribe" element={<Subscribe />} />
          

          
          
          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  );
};

export default App;
