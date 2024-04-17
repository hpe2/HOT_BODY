import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/root/Home";
import Community from "./pages/root/Community";
import CommunityNewPost from "./pages/root/community/CommunityNewPost";
import Profile from "./pages/user/Profile";
import Update from "./pages/user/Update";
import Login from "./pages/root/auth/Login";
import Signup from "./pages/root/auth/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          {/* community */}
          <Route path="/community" element={<Community />} />
          <Route path="/community/write" element={<CommunityNewPost />} />

          {/* profile */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/update" element={<Update />} />
          <Route path="/profile/wrote" element={<Update />} />
          <Route path="/profile/pt" element={<Update />} />
          <Route path="/profile/point" element={<Update />} />
          <Route path="/gogaek" element={<Update />} />

          {/* group */}
          {/* <Route path="/group" element={<Group />} />
          <Route path="/group" element={<GroupMain />} /> */}

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
