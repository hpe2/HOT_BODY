import { useState } from "react";
import "../../../style/auth.css";
import AuthBanner from "/public/images/auth-banner.jpg";
import Logo from "/public/images/logo.png";
import Profile from "/public/images/user-profile.svg";
import LockIcon from "/public/images/lock.svg";

import { useNavigate } from "react-router-dom";
import AuthInput from "../../../components/auth/AuthInput";
import { useUserContext } from "../../../context/AuthContext";
import { useSignIn } from "../../../Queries/queriesAndMutations";
import {toast} from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { mutateAsync: login, isPending } = useSignIn();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { checkAuthUser } = useUserContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      userId,
      password,
    };
    const res = await login(userData);
    if (res.status === 200) {
      toast.info(res.data.message);
      setUserId("");
      setPassword("");
      checkAuthUser();
      navigate("/");
    } else {
      if(res.response.data.message) return toast.info(res.response.data.message);
      else toast.info('로그인 실패했습니다.');
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-container box-shadow">
        <div className="auth-left">
          <img src={AuthBanner} alt="auth-banner" />
          <div className="auth-banner-img-overlay" />
        </div>

        <div className="auth-right">
          <ul className="auth-label">
            <li className="auth-label-active">로그인</li>
            <li
              className="auth-label-not-active"
              onClick={() => navigate("/signup")}
            >
              회원가입
            </li>
          </ul>


       

          <img src={Logo} alt="logo" className="auth-logo" />


          <form className="auth-form" onSubmit={handleLogin}>
            <AuthInput
              type="text"
              placeholder="아이디"
              state={userId}
              img={Profile}
              setState={setUserId}
            />

            <AuthInput
              type="password"
              placeholder="비밀번호"
              state={password}
              img={LockIcon}
              setState={setPassword}
            />

            <p className="point-color" onClick={()=>navigate('/signup')}>아직 회원이 아니신가요?</p>
            <button disabled={!password || !userId} type="submit" className="box-shadow">{isPending ? 'Processing. . .' : 'Login'}</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
