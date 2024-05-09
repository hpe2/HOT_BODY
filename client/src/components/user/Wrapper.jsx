import React, { useEffect } from "react";
import "../../style/user/wrapper.scss";
import { Outlet, useNavigate } from "react-router-dom";
import UserNavbar from './InnerNavbar';
import { useUserContext } from '../../context/AuthContext';
import {toast} from 'react-toastify';

const Wrapper = () => {
  const navigate = useNavigate()
  const {isAuthenticated, checkAuthUser} = useUserContext();

  useEffect(() => {
    checkAuthUser();
    if(!isAuthenticated){
      toast.info('로그인 정보가 없습니다.')
      navigate('/')
    }
  }, []);

  return (
    <section id="content">
      <div className="wrapper">
        <div className="switchpoint">
          <UserNavbar />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
