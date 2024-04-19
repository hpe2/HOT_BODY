import UserNavbar from "../../components/UserNavbar";
import { Outlet } from "react-router-dom";
import Wrapper from "../../components/Wrapper";


const UserRoot = () => {
  return (
    <>
    <Wrapper>
        <UserNavbar />
        <Outlet />
    </Wrapper>
    </>
  )
};

export default UserRoot;