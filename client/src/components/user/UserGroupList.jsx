
const UserGroupList = ({group}) => {
  return (
        <>
        <img src="" alt="이미지" className='groupImage'/>
        <div className='groupStatus'>
          <span>현재 보유한 포인트</span>
          <h1></h1>
        </div>
        <div className='buttons'>
          <button className={'modal-open-btn'} onClick={() => setModalOpen(true)}>
            응모하기
          </button>
        </div>
        {
        modalOpen &&
        <div className={'modal-container'} ref={modalBackground} onClick={(e) => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <div className={'modal-content'}>
            <div className='modal-boxContainer'>

            </div>
            <div className='data'>
              <div className='modal-inner-boxContainer'>
                현재 보유 포인트
                {user.point}
              </div>
              <div className='modal-inner-boxContainer'>
                {user.point}
              </div>
              <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                모달 닫기
              </button>
            </div>
          </div>
        </div>
      }
      </>
  );
};

export default UserGroupList;
