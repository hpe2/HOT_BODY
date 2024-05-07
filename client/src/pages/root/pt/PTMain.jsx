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
  const [searchedResult, setSearchedResult] = useState();
  const {mutateAsync: searchPt, isPending} = useSearchPt();
  const [selectedTrainer, setSelectedTrainer] = useState();

  const [searchedLonLat, setSearchedLonLat] = useState();
  // 검색한 장소의 위치 정보(도로명, 위도, 경도)를 searchLocation에 저장하는 함수
  const handleSearch = async () => {
    if (debouncedSearch) {
      // 검색한 지역의 정보 찾기 (주소명, 경도, 위도)
      let geocoder = await new window.kakao.maps.services.Geocoder();
      const response = async (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const locationData = {
            lon: Number(result[0].x), // 경도
            lat: Number(result[0].y), // 위도
          };
          setSearchedLonLat(locationData);
        } else {
          setSearchedLonLat(null);
        }
      };
      await geocoder.addressSearch(debouncedSearch, response);
    }
  };

  const handleSearchResult = async () => {
    const result = await searchPt(searchedLonLat);
    if(result.status == 200){
      setSearchedResult(result.data)
    }else{
      setSearchedResult(null);
    }
    // if(!isPending) setSearchedResult(result);
  }
  

  // debouncedSearch이 갱신 될 때마다 트레이너 리스트 fetching  
  useEffect(() => {
    if(debouncedSearch) handleSearch();
  }, [debouncedSearch])

  useEffect(() => {
    if(searchedLonLat) handleSearchResult();
  }, [searchedLonLat])

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
          {searchedResult && searchedResult.length > 0 &&
            searchedResult?.map(result => (
            <PtSearchResult trainer={result} setIsDetailOpen={setIsDetailOpen} key={result._id} setSelectedTrainer={setSelectedTrainer} />
          ))}
          {searchedResult && searchedResult.length == 0 &&
            <p>해당 지역 근처에 트레이너 없습니다. <br/>다른 주소를 입력해보세요.</p>
          }
          
        </ul>

        {isDetailOpen && selectedTrainer && (
          <PtSearchResultDetail setIsDetailOpen={setIsDetailOpen} selectedTrainer={selectedTrainer} />
        )}
      </div>

      <KakaoMap />
    </div>
  );
};

export default PTMain;
