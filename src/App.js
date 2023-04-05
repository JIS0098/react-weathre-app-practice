import './App.css';
import { useEffect ,useState } from 'react';


//1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다
//2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨상태가 있다
//3. 5개의 각각 다른 나라 버튼이 있다 (1개는 현재위치)
//4. 도시 버튼을 클릭할때 마다 도시별 날씨가 나온다
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다 
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다 

function App() {
  // 현재위치 가져오는법 노션
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon);
    });
  };

  //현재위치 기반 날씨 가져오는법 노션, async await fetch 등 API 공부 및 노션
  const getWeatherByCurrentLocation= async(lat, lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={7ad4e1ff0fc65b88c06ec1b33dd9e036}`;
    let response = await fetch(url); //기다려줘 url을 호출해 데이터를 가져올때까지 
    let data = await response.json(); //기다려줘 response에서 json 파일을 추출하는것을
    console.log(data);
  }

  useEffect(()=>{
    getCurrentLocation();
  },[]);

  return (
    <div className="App">
      <h1>날씨사이트를 만들 예정입니당</h1>
    </div>
  );
}
export default App;
