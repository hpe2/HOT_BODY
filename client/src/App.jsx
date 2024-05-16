
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
import Terms from "./pages/root/pt/Terms";
import Privacy from "./pages/root/pt/Privacy";
import PTReservation from "./pages/root/pt/PTReservation";
import Subscribe from "./pages/root/pt/Subscribe";
import Group from './pages/root/group/Group';
import GroupCreate from './pages/root/group/GroupCreate';
import GroupDetail from './pages/root/group/GroupDetail';
import Home from "./pages/root/home/Home";
import Footer from "./components/Footer";
import PTMain from './pages/root/pt/PTMain';
import PTDetail from './pages/root/pt/PTDetail';
import PTResiger from './pages/root/pt/PTRegister';
import SubMain from "./pages/root/sub/SubMain";
import ErrorPage from "./pages/error/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";


const App = () => {
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorPage}
    >
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
          
          {/*membership*/}
          < Route path="/terms" element={<Terms />} />
          < Route path="/privacy" element={<Privacy />} />
          < Route path="/pt/reservation" element={<PTReservation />} />
          < Route path="/subscribe" element={<Subscribe />} />

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Group */}
          <Route path='/group' element={<Group />} />
          <Route path='/group/create' element={<GroupCreate />} />
          <Route path='/group/detail/:id' element={<GroupDetail />} /> 

          {/* PT */}
          <Route path='/pt' element={<PTMain />} />
          <Route path='/pt/detail/:id' element={<PTDetail />} />
          <Route path='/pt/register' element={<PTResiger />} />


          {/* Sub */}
          <Route path="/sub/main/:type2" element={<SubMain />} />
          <Route path="/sub" element={<SubMain />} />

        </Routes>
        <Footer />
    </ErrorBoundary>
  );
};

export default App;
