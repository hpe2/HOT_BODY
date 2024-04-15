import { Route, Routes} from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/root/Home';
import Community from './pages/root/Community';
import CommunityNewPost from './pages/root/community/CommunityNewPost';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          {/* community */}
          <Route path='/community' element={<Community />} />
          <Route path='/community/write' element={<CommunityNewPost />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;
