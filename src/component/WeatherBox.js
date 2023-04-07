import React from 'react'


// 날씨정보만 필요하므로 props를 필요없이{필요한 속성}만 넣어줘 props.weather.name=>weather.name으로 간결하게 작성가능
export const WeatherBox = ({weather}) => { 
  return (
    <div>
      <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp}℃/{weather?.main.temp*1.8+32}°F</h2>
        <h3>{weather?.weather[0].description}</h3>
      </div>
    </div>

  )
}
