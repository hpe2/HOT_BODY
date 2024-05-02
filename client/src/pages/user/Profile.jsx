import { useState } from "react";
import { Link } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import "../../style/user/profile.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useUserContext } from "../../context/AuthContext";
import ProfileForm from "../../components/user/ProfileForm";
import UpdateProfileForm from "../../components/user/UpdateProfileHome";
import PtInfoUpdate from "../../components/user/PtInfoUpdate";
import PtInfo from "../../components/user/PtInfo";
import UserMemberPurchaseList from "../../components/user/UserMemberPurchaseList"

const Profile = () => {
  const { user } = useUserContext();
  const [isEdit, setIsEdit] = useState(false);
  const [ptEdit, setPtEdit] = useState(false);
  const [isMember, setIsMember] = useState(true);
  const [isAllVaild, setIsAllVaild] = useState(true);
  const PurchaseList = [
    {date: '2024/04/24', text:'HotBody+ 월간 멤버십', price:'₩4,900'},
    {date: '2024/04/24', text:'HotBody+ 월간 멤버십', price:'₩4,900'},
  ]
  const PanelDrop = (e) => {
    e.stopPropagation()
      if(isAllVaild === false){
          setIsAllVaild(true);
          }else{setIsAllVaild(false)};
  }

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
                <span>{/* user.membership */isMember === true ? "구독중" : "미구독"}</span>
              </span>
              <div className= "purchase" onClick={PanelDrop}>
                <label htmlFor="purchase">결제 내역</label>
                  <IoIosArrowForward />
              </div>
              <div className={`panel-purchase ${isAllVaild ? '' : 'dropdown'}`}>
                  {isMember ? (
                  PurchaseList.map((purchase) => (<UserMemberPurchaseList purchase={purchase} />))
                ) : (
                  <p className='animateLoading'>멤버십 가입내역이 없습니다.</p>
                )}
              </div>
            </div>
          </div>
          <Link to="/subscribe" className="link">
            <button className="mebershipBtn">구독하기</button>
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
