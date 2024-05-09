import React,{useState} from 'react';
import "./../../style/user/CustomerServicePage.scss"
import SearchBar from '../../components/user/CustomerServiceSearchBar';
import CustomerServiceQnAs from '../../components/user/CustomerServiceQnAs';


const CustomerServicePage = () => {
  const serviceQna = [
    {category: '자주 묻는 질문', question:'회원 탈퇴는 어떻게 하나요?', answer:"회원 탈퇴를 원하시는 경우에는 마이페이지에서 '회원 탈퇴'를 선택하여 진행할 수 있습니다. 다만, 탈퇴 시에는 모든 데이터와 정보가 삭제되므로 신중하게 결정해주세요."},
    {category: '자주 묻는 질문', question:'비밀번호를 잊어버렸어요. 어떻게 하면 되나요?', answer:"비밀번호를 잊어버리셨다면 로그인 페이지에서 '비밀번호 찾기'를 클릭하여 이메일 주소를 입력하시면 비밀번호 재설정 링크를 보내드립니다. 해당 링크를 통해 새로운 비밀번호를 설정할 수 있습니다."},
    {category: '회원가입 및 로그인', question:'회원가입 시에 필요한 정보는 무엇인가요?', answer:"회원가입 시에는 이메일 주소와 비밀번호만 필요합니다. 추가적인 정보는 선택 사항입니다."},
    {category: '회원가입 및 로그인', question:'소셜 미디어 계정으로도 가입할 수 있나요?', answer:"네, 페이스북 또는 구글 계정을 사용하여 손쉽게 회원가입할 수 있습니다. '소셜 로그인' 옵션을 선택하여 진행하세요."},
    {category: '결제 및 요금', question:'결제 수단은 어떤 것들이 있나요?', answer:"현재는 신용카드 결제만 가능합니다. 추가적인 결제 수단은 추후에 업데이트될 예정입니다."},
    {category: '결제 및 요금', question:'요금 청구일은 언제인가요?', answer:"요금 청구일은 가입한 날짜를 기준으로 매월 동일한 날에 이루어집니다."},
    {category: '그룹 및 커뮤니티', question:'그룹에 가입하려면 어떻게 해야 하나요?', answer:"그룹에 가입하려면 해당 그룹 페이지로 이동하여 '가입 신청'을 클릭하세요. 그룹 관리자의 승인이 필요합니다."},
    {category: '그룹 및 커뮤니티', question:'자유롭게 글을 작성할 수 있는 공간은 어디인가요?', answer:"커뮤니티 탭에서 '게시판'을 선택하시면 자유롭게 글을 작성할 수 있는 공간이 제공됩니다."},
    {category: '그룹 및 커뮤니티', question:'그룹을 만드는 방법은 무엇인가요?', answer:"그룹을 만들려면 홈페이지 상단의 '그룹 만들기' 버튼을 클릭하세요. 그룹 이름, 설명, 카테고리, 공개 여부 등을 설정하고 만들기 버튼을 클릭하면 그룹이 생성됩니다."},
    {category: '그룹 및 커뮤니티', question:'그룹을 만들기 위한 요구 사항이 있나요?', answer:"그룹을 만들기 위해서는 회원으로 가입되어 있어야 하며, 그룹을 만들기 위한 권한이 필요합니다. 또한 그룹 이름과 설명은 공개되므로 주의해서 작성해주세요."},
    {category: '계정 및 프로필 관리', question:'프로필 사진은 어디에서 변경할 수 있나요?', answer:"프로필 사진을 변경하려면 마이페이지에서 '프로필 편집'을 선택하고 원하는 이미지를 업로드하세요."},
    {category: '계정 및 프로필 관리', question:'계정 정보를 수정하고 싶어요. 어디에서 할 수 있나요?', answer:"계정 정보를 수정하려면 마이페이지에서 '계정 설정'을 선택하여 이메일 주소나 비밀번호를 변경할 수 있습니다."},
  ]
  const [search, setSearch] = useState("");
  const onChange = (e) => {setSearch(e.target.value)} 
  const filterTitle = serviceQna.filter((p) => {
    return p.question.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
  })
  function Trip({ place }) {
    return <h1>I went to {place}</h1>;
}
  return (
    <main className="qnaContent">
      <div className="qnaContainer">
        <div className="qna">
          <h1>고객센터</h1>
          <div className="boxContainer">
          <div className="customer-service-page">
            <div className='hashtag'>
              <ul>
                <li>#회원가입</li>
                <li>#비밀번호</li>
                <li>#결제</li>
                <li>#그룹</li>
                <li>#정보수정</li>
              </ul>
            </div>
              <SearchBar value={search} onChange={onChange}/>
            <div className="search-bar">
              {filterTitle.map((qna) =>
              <div className='questions'>
                <CustomerServiceQnAs category={qna.category} question={qna.question} answer={qna.answer}/>
              </div>
              )}
            </div>
          <footer>
            <p>고객센터 문의: support@example.com</p>
          </footer>
          </div>
          </div>
        </div>
      </div>  
    </main>
  );
};

export default CustomerServicePage;