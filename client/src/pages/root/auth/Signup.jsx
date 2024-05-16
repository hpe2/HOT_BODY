import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../../Queries/queriesAndMutations";
import { toast } from "react-toastify";
import AuthInput from "../../../components/auth/AuthInput";
import AuthBanner from "/images/auth-banner.jpg";
import Logo from "/images/logo.png";
import Profile from "/images/user-profile.svg";
import LockIcon from "/images/lock.svg";
import MailIcon from "/images/mail-gray.svg";

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
      return toast.info(`회원가입에 실패했습니다. ${res.response.data.message}`);
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
      </div>
    </div>
  );
};

export default Signup;
