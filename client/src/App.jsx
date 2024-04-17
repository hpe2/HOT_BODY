import { Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from "./pages/user/Profile";
import Wrote from "./pages/user/Wrote";
import Navbar from './components/Navbar';
import Wrapper from './components/user/Wrapper';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<Wrapper />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/wrote' element={<Wrote/>} />
          <Route path='/profile/pt' element={<Profile />} />
          <Route path='/profile/group' element={<Profile />} />
          <Route path='/profile/point' element={<Profile />} />
          <Route path='/gogaek' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
