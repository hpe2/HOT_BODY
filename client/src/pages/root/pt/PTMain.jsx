import { useEffect, useState } from "react";
import "../../../style/pt/ptMain.css";
import SearchWhite from "/images/searchIcon-white.svg";
import SearchGray from "/images/searchIcon-gray.svg";
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
  const [nearBy, setNearBy] = useState(); 

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
      result.data.map(arr => {
        setNearBy([...nearBy, {lat: arr.location.lat, lon: arr.location.lon}]);
      })
    }else{
      setSearchedResult(null);
    }
  }
  

  // debouncedSearch이 갱신 될 때마다 트레이너 리스트 fetching  
  useEffect(() => {
    setNearBy([]);
    setIsDetailOpen(false);
    if(debouncedSearch) handleSearch();
  }, [debouncedSearch])

  useEffect(() => {
    if(!searchedLonLat || !searchValue) return setSearchedResult(null);
    if(searchedLonLat) handleSearchResult();
  }, [searchedLonLat, searchValue])

  return (
    <div className="pt-main-container box-shadow">
      <div className="pt-search-container">
        <div className="pt-search-wrap">
          <div className="pt-search-input">
            <img src={SearchWhite} alt="search_icon" />
            <input
              placeholder="도로명을 입력해주세요."
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
            <div className="flex-col flex-align" style={{marginTop: '6rem', gap: '1.5rem'}}>
              <img src={SearchGray} alt="search-icon" style={{width: '80px'}} />
              <h2 style={{color: '#999', textAlign: 'center'}}>해당 지역 근처에 트레이너 없습니다. 
              <br/>다른 주소를 입력해보세요.</h2>
            </div>
          }
          {!searchValue && (
            <div className="flex-col flex-align" style={{marginTop: '6rem', gap: '1.5rem'}}>
              <img src={SearchGray} alt="search-icon" style={{width: '80px'}} />
              <h2 style={{color: '#999'}}>검색 창에 올바른 도로명을 입력하세요</h2>
            </div>
          )}
          
        </ul>

        {isDetailOpen && selectedTrainer && (
          <PtSearchResultDetail setIsDetailOpen={setIsDetailOpen} selectedTrainer={selectedTrainer} />
        )}
      </div>

      <KakaoMap searchedLonLat={searchedLonLat} nearBy={nearBy} />
    </div>
  );
};

export default PTMain;
