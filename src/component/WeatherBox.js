import React from 'react'


// 날씨정보만 필요하므로 props를 필요없이{필요한 속성}만 넣어줘 props.weather.name=>weather.name으로 간결하게 작성가능
export const WeatherBox = ({weather}) => { 
  return (
    <div>
      <div className='weather-box'>
        <div>{weather?.name}</div>
        {/*useEffect는 UI가 랜더링 완료된 후 작동되는데 첫 랜더링 때의 weather의 초기값은 null이므로 조건을 새워주지않으면 에러가뜬다
        처음 null은 false를 반환해 삼항연산식을 사용해 weather이 초기값으로 false를 갖으면 아무것도 안뜨게되고 랜더링후 name값이 뜬다 */}
        <h2>{weather?.main.temp}℃/ {weather?.main.temp*1.8+32}°F</h2>
        <h3>{weather?.weather[0].description}</h3>
      </div>
    </div>

  )
}
