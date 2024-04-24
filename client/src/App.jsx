
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
import GroupCreate from './pages/root/group/GroupCreate';
import Group from './pages/root/group/Group';



const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
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
          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Group */}
          <Route path='/group/create' element={<GroupCreate />} />
          <Route path='/group' element={<Group />} />
        </Routes>
    </>
  );
};

export default App;
