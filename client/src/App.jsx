import { Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import RootLayout from './pages/RootLayout';
import Profile from "./pages/user/Profile";
import Update from "./pages/user/Update";


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />}>
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
