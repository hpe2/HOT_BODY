import { useEffect } from 'react'

const KakaoMap = ({searchLocation, searchResult}) => {
  // 위도 - 기준 서울 시청
  const latVal = searchLocation?.lat ? searchLocation?.lat : 37.5664056;
  // 경도 - 기준 서울 시청
  const lonVal = searchLocation?.lon ? searchLocation?.lon : 126.9778222;


  // marker 좌표 
  const markers = [
    new window.kakao.maps.LatLng(latVal, lonVal),
  ]

  const setMarkers = (map) => {
    markers.forEach(obj => {
      new window.kakao.maps.Marker({
        map,
        position: obj,
        title: '테스트'
      })
    })
  }

  const init = (map) => {
    window.kakao.maps.event.addListener(
      map,
      'click',
      function (mouseEvent){
        console.log(mouseEvent.LatLng)
      }
    )
  }

  useEffect(() => {
    let container = document.getElementById('map');
    // 생성될 지도의 옵션 설정
    let options = {
      center: new window.kakao.maps.LatLng(latVal, lonVal), // 지도의 중심 좌표
      level: 3, // 지도의 초기 scale
    }

    // 지도를 생성하는 객체 반환
    let map = new window.kakao.maps.Map(container, options);

    const mainMarker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(latVal, lonVal)
    })

    if(searchResult){
      searchResult.map(location => {
        const marker = new window.kakao.maps.LatLng(location.lat, location.lon)
        markers.push(marker);
      })
    }

    init(map);
    mainMarker.setMap(map)
    setMarkers(map);


  }, [searchLocation, searchResult])

  return (
    <div className='map' id='map'>

    </div>
  )
}

export default KakaoMap