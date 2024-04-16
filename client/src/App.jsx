import { Route, Routes} from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/root/Home';
import CommunityNewPost from './pages/root/community/CommunityPosting';
import Profile from "./pages/user/Profile";
import Update from "./pages/user/Update";
import Community from './pages/root/community/Community';


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          {/* community */}
          <Route path='/community' element={<Community />} />
          <Route path='/community/:type' element={<CommunityNewPost />} />

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
