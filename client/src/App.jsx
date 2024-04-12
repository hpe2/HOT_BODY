import React from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home/Home";
import User from "./pages/user/User";

const App = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <User/>
      </Wrapper>
    </>
  );
};

export default App;
