
import { Route, Routes } from "react-router-dom";
import Wrapper from './components/user/Wrapper';
import Profile from "./pages/user/Profile";
import Wrote from "./pages/user/Wrote";
import Pt from "./pages/user/Pt";
import Groups from './pages/user/Groups';
import Point from './pages/user/Point';
import Login from "./pages/root/auth/Login";
import Signup from "./pages/root/auth/Signup";
import Community from "./pages/root/community/Community";
import Navbar from "./components/Navbar";
import CommunityPosting from "./pages/root/community/CommunityPosting";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import CustomerServicePage from "./pages/user/CustomerServicePage";
import CommunityPostDetail from './pages/root/community/CommunityPostDetail';
import CommunityEditPost from './pages/root/community/CommunityEditPost';
import Group from './pages/root/group/Group';
import GroupCreate from './pages/root/group/GroupCreate';
import GroupDetail from './pages/root/group/GroupDetail';
import GroupMeetingCreate from './pages/root/group/GroupMeetingCreate';
import Home from "./pages/root/home/Home";
import Footer from "./components/Footer";
import PTMain from './pages/root/pt/PTMain';
import PTDetail from './pages/root/pt/PTDetail';
import EventPage from "./pages/root/Event/EventPage";
import PTResiger from './pages/root/pt/PTRegister';


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
            <Route path="/profile/pt" element={<Pt/>} />
            <Route path="/profile/group" element={<Groups />} />
            <Route path="/profile/point" element={<Point />} />
            <Route path="/gogaek" element={<CustomerServicePage />} />
          </Route>

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Group */}
          <Route path='/group' element={<Group />} />
          <Route path='/group/create' element={<GroupCreate />} />
          <Route path='/group/detail/:id' element={<GroupDetail />} /> 
          <Route path='/group/meeting/create/:id' element={<GroupMeetingCreate />} /> 

          {/* PT */}
          <Route path='/pt' element={<PTMain />} />
          <Route path='/pt/detail' element={<PTDetail />} />
          <Route path='/pt/register' element={<PTResiger />} />


          {/* event */}
          <Route path="/event" element={<EventPage />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
