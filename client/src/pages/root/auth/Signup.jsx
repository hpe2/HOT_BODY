import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../../Queries/queriesAndMutations";
import { toast } from "react-toastify";
import AuthInput from "../../../components/auth/AuthInput";

import AuthBanner from "/public/images/auth-banner.jpg";
import Logo from "/public/images/logo.png";
import Profile from "/public/images/user-profile.svg";
import LockIcon from "/public/images/lock.svg";
import MailIcon from "/public/images/mail-gray.svg";

const Signup = () => {
  const navigate = useNavigate();
  const { mutateAsync: signup, isPending } = useSignUp();

  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      userId,
      name,
      password,
    };
    const res = await signup(userInfo);
    if (res.status === 200) {
      toast.info(res.data.message);
      setEmail("");
      setUserId("");
      setName("");
      setPassword("");
      navigate("/login");
    } else {
      if (res.response.data.message)
        return toast.info(res.response.data.message);
      else toast.info("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-container box-shadow">
        <div className="auth-left">
          <img src={AuthBanner} alt="auth-banner" />
          <div className="auth-banner-img-overlay" />
        </div>

<<<<<<< HEAD
      <div className="loginRightSection">
        <ul className="authLinks">
          <li onClick={() => navigate("/login")}>로그인</li>
          <li className="authMenuActive">회원가입</li>
        </ul>
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="userid"
            placeholder="Userid"
            className="useridInput"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="name"
            placeholder="name"
            className="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="pwdInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="btn" type="submit">
            {isLoading ? "Processing. . ." : "가입완료"}
          </button>
        </form>
=======
        <div className="auth-right">
          <ul className="auth-label">
            <li
              className="auth-label-not-active"
              onClick={() => navigate("/login")}
            >
              로그인
            </li>
            <li className="auth-label-active">회원가입</li>
          </ul>

          <img src={Logo} alt="logo" className="auth-logo" />

          <form className="auth-form" onSubmit={handleSubmit}>
            <AuthInput
              type="text"
              placeholder="아이디"
              state={userId}
              img={Profile}
              setState={setUserId}
            />

            <AuthInput
              type="email"
              placeholder="이메일"
              state={email}
              img={MailIcon}
              setState={setEmail}
            />

            <AuthInput
              type="text"
              placeholder="닉네임"
              state={name}
              img={Profile}
              setState={setName}
            />

            <AuthInput
              type="password"
              placeholder="비밀번호"
              state={password}
              img={LockIcon}
              setState={setPassword}
            />

            <p className="point-color" onClick={() => navigate("/login")}>
              이미 계정이 있으신가요?
            </p>
            <button
              disabled={!password || !userId || !email}
              type="submit"
              className="box-shadow"
            >
              {isPending ? "Processing. . ." : "Sign up"}
            </button>
          </form>
        </div>
>>>>>>> 48b9725a34369d13061fd3330d61d086f5613902
      </div>
    </div>
  );
};

export default Signup;
