import { Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import RootLayout from './pages/RootLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
