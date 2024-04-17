import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../../Queries/queriesAndMutations";

const Signup = () => {
  const navigate = useNavigate();
  const { mutateAsync: signup, isPending: isLoading } = useSignUp();

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
    console.log(res);
    if (res.status === 200) {
      alert("회원가입에 성공하셨습니다.");
      setEmail("");
      setUserId("");
      setName("");
      setPassword("");
      navigate("/login");
    } else {
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="LoginContainer">
      <div className="loginLeftSection"></div>

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
            {isLoading ? "Processing. . ." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
