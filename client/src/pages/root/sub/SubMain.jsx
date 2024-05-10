import "../../../style/sub/submain.css";
import SubClick from "../../../components/sub/SubClick";
import { useNavigate, useParams } from "react-router-dom";

const SubMain = () => {
  const { type2 } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <button className="subvideo" onClick={() => navigate("/sub/main/click")}>
        <a href="#content1">
          <video style={{ width: "100%", height: "auto" }} muted autoPlay loop>
            <source
              src="/images/sub_HOTBODY.mp4"
              type="video/mp4"
            />
          </video>
        </a>
      </button>

      {type2 === "click" && <SubClick />}
    </>
  );
};

export default SubMain;
