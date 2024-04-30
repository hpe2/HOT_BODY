import { useState } from "react";
import "../../../style/pt/ptMain.css";
import Search from "/public/images/searchIcon-white.svg";
import PtSearchResult from "../../../components/pt/PtSearchResult";
import KakaoMap from "../../../components/pt/KakaoMap";
import PtSearchResultDetail from '../../../components/pt/PtSearchResultDetail';

const PTMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div className="pt-main-container box-shadow">
      <div className="pt-search-container">
        <div className="pt-search-wrap">
          <div className="pt-search-input">
            <img src={Search} alt="search_icon" />
            <input
              placeholder="위치를 입력해주세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <ul className="pt-search-results">
          <PtSearchResult setIsDetailOpen={setIsDetailOpen} />
          <PtSearchResult setIsDetailOpen={setIsDetailOpen} />
          <PtSearchResult setIsDetailOpen={setIsDetailOpen} />
          <PtSearchResult setIsDetailOpen={setIsDetailOpen} />
          <PtSearchResult setIsDetailOpen={setIsDetailOpen} />
          <PtSearchResult setIsDetailOpen={setIsDetailOpen} />
        </ul>
        {isDetailOpen && (
          <PtSearchResultDetail setIsDetailOpen={setIsDetailOpen} />
        )}

      </div>


      <KakaoMap />
    </div>
  );
};

export default PTMain;
