import { useEffect, useState } from "react";
import "../../../style/pt/ptMain.css";
import Search from "/images/searchIcon-white.svg";
import PtSearchResult from "../../../components/pt/PtSearchResult";
import KakaoMap from "../../../components/pt/KakaoMap";
import PtSearchResultDetail from "../../../components/pt/PtSearchResultDetail";
import useDebounce from "../../../components/pt/useDebounce";
import { useSearchPt } from "../../../Queries/queriesAndMutations";

const PTMain = () => {
  const [searchValue, setSearchValue] = useState();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const debouncedSearch = useDebounce(searchValue, 500);
  // const { data: searchedPt, isFetching } = useSearchPt(debouncedSearch);

  const [searchLocation, setSearchLocation] = useState();
  // 검색한 장소의 위치 정보(도로명, 위도, 경도)를 searchLocation에 저장하는 함수
  const handleSearch = async (e) => {
    e.preventDefault();
    if (debouncedSearch) {
      // 검색한 지역의 정보 찾기 (주소명, 경도, 위도)
      let geocoder = new window.kakao.maps.services.Geocoder();
      const response = async (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const locationData = {
            lon: Number(result[0].x), // 경도
            lat: Number(result[0].y), // 위도
          };
          setSearchLocation(locationData);
        } else {
          // 검색어(주소)가 올바르지 않은 경우
        }
      };
      geocoder.addressSearch(debouncedSearch, response);
    }
  };

  useEffect(() => {
    console.log(searchLocation);
  }, [ searchLocation])

  console.log(searchLocation);

  return (
    <div className="pt-main-container box-shadow">
      <div className="pt-search-container">
        <div className="pt-search-wrap">
          <div className="pt-search-input">
            <img src={Search} alt="search_icon" />
            <input
              placeholder="위치를 입력해주세요."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
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
