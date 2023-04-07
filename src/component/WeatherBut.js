import React from 'react'
import { Button } from 'react-bootstrap';

export const WeatherBut = ({cities}) => {
    return (
        <div className='but-box'>
            <Button variant="light">현재위치</Button>
            
            {cities.map((item)=>( //js 배열 문법으로 map을 통해 각각 아이템들에게 버튼효과를 준다
                <Button variant="light">{item}</Button>
            ))}
        </div>
    )
}



