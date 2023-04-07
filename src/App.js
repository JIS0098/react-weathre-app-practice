import "./App.css";
import { useEffect, useState } from "react";
import { WeatherBox } from "./component/WeatherBox";
import { WeatherBut } from "./component/WeatherBut";
import "bootstrap/dist/css/bootstrap.min.css";

//1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다
//2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨상태가 있다
//3. 5개의 각각 다른 나라 버튼이 있다 (1개는 현재위치)
//4. 도시 버튼을 클릭할때 마다 도시별 날씨가 나온다
//4-1. 도시이름이 담긴 배열을 만든다
//4-2. 도시이름 배열을 날씨버튼 props에 넣겨준다
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다

const API_KEY = "96d5d9b8cdb03a1796aa86d82fddbf52";

function App() {
  const [weather, setWeather] = useState(null); //날씨를 업데이트 할떄마다 UI도 업데이트하므로 state를 만든다.
  const cities = ['paris','new york','tokyo','seoul'];
 
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  //콜백함수,비동기처리 공부
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //온도단위 변환을위해 를 추가시켜준다
    let response = await fetch(url); //기다려 url을 호출해 데이터를 가져올때 까지
    let data = await response.json(); //기다려 response에서 json 파일을 추출할 때 까지
    setWeather(data);
    
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherBut cities={cities}/>
      </div>
    </div>
  );
}
export default App;
