import { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/user/profile.scss";
import ProfileForm from "../../components/user/ProfileForm";
import UpdateProfileForm from "../../components/user/UpdateProfileHome";
import PtInfoUpdate from "../../components/user/PtInfoUpdate";
import PtInfo from "../../components/user/PtInfo";
import { useUserContext } from "../../context/AuthContext";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [ptEdit, setPtEdit] = useState(false);
  const {user} = useUserContext();

  

  return (
    <div className="profileContent">

      <section className="profileContainer">
        <div className="account">
          <h1>계정</h1>
          <div className="boxContainer">
            {isEdit ? (
              <UpdateProfileForm setIsEdit={setIsEdit} />
            ) : (
              <ProfileForm setIsEdit={setIsEdit} />
            )}
          </div>
        </div>
      </section>

      <section className="profileContainer">
        <div className="membership">
          <h1>멤버십</h1>
          <div className="boxContainer">
            <div className="formField">
              <span>
                <label htmlFor="membership">Hot Body+</label>
                <span>{user.membership ? "구독중" : "미구독"}</span>
              </span>

            </div>
          </div>
          <Link to="/subscribe" className="link">
            <button className="mebershipBtn">{user.membership ? '구독 해제' : '구독하기'}</button>
          </Link>
        </div>
      </section>

      <section className="profileContainer">
        <div className="counsel">
          <h1>
            상세 정보<br/><small style={{color: '#a40000'}}>* PT상담신청시에 필요한 정보입니다.</small>
          </h1>
          <div className="boxContainer">
            {ptEdit ? (
              <PtInfoUpdate setPtEdit={setPtEdit} />
            ) : (
              <PtInfo setPtEdit={setPtEdit} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
