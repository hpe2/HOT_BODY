import { useNavigate } from "react-router-dom";
import "../../style/error/error.css";

const ErrorPage = ({error}) => {
  const navigate = useNavigate();

  return (
    <div className="flex-align flex-col error-wrap">
      <div className="flex-col error-content box-shadow">
        <div className="flex-align" style={{gap: '1.5rem'}}>
          <div className="flex-align">
            <h1 className="error-title point-color">오류</h1>
            <p className="error-title-sub">Error</p>
          </div>

          <div className="flex-col">
            <p>
              죄송합니다. 요청하신 페이지에서 데이터 요청 중 에러가 발생했습니다.
              <br />
              동일한 문제가 지속적으로 발생할 경우, 관리자에게 문의해주시기
              바랍니다.
            </p>
            <p className="error-reason">에러 사유 : {`${error}`}</p>
          </div>

        </div>
        <button onClick={() => navigate("/")}>홈페이지로 돌아가기</button>{" "}
      </div>
    </div>
  );
};

export default ErrorPage;
