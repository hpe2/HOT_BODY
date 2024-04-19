import { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/profile.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useUserContext } from "../../context/AuthContext";
import ProfileForm from "../../components/user/ProfileForm";
import UpdateProfileForm from "../../components/user/UpdateProfileHome";
import PtInfoUpdate from "../../components/user/PtInfoUpdate";
import PtInfo from "../../components/user/PtInfo";

const Profile = () => {
  const { user } = useUserContext();
  const [isEdit, setIsEdit] = useState(false);
  const [ptEdit, setPtEdit] = useState(false);

  return (
    <section className="content">

      <div className="profileContainer">
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
      </div>

      <div className="profileContainer">
        <div className="membership">
          <h1>멤버십</h1>
          <div className="boxContainer">
            <div className="formField">
              <span>
                <label htmlFor="membership">Hot Body+</label>
                <span>{user.membership ? "구독중" : "미구독"}</span>
              </span>
              <Link to="/profile/update/purchase" className="purchase">
                <label htmlFor="purchase">결제 내역</label>
                <button>
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
          <Link to="/membership" className="link">
            <button className="mebershipBtn">구독하기</button>
          </Link>
        </div>
      </div>

      <div className="profileContainer">
        <div className="counsel">
          <h1>
            상세 정보<br/><small style={{color: '#a40000'}}>*PT상담신청시에 필요한 정보입니다.</small>
          </h1>
          <div className="boxContainer">
            {ptEdit ? (
              <PtInfoUpdate setPtEdit={setPtEdit} />
            ) : (
              <PtInfo setPtEdit={setPtEdit} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
