import { Route, Routes} from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/root/Home';
import Community from './pages/root/Community';
import CommunityNewPost from './pages/root/community/CommunityNewPost';
import Profile from "./pages/user/Profile";
import Update from "./pages/user/Update";


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          {/* community */}
          <Route path='/community' element={<Community />} />
          <Route path='/community/write' element={<CommunityNewPost />} />

          {/* profile */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/update' element={<Update />} />
          <Route path='/profile/wrote' element={<Update />} />
          <Route path='/profile/pt' element={<Update />} />
          <Route path='/profile/point' element={<Update />} />
          <Route path='/gogaek' element={<Update />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
