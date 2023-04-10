import React from "react";
import { Button } from "react-bootstrap";

export const WeatherBut = ({ cities, setCity }) => {
  return (
    <div className="but-box">
      <Button variant="light">현재위치</Button>

      {cities.map((item) => (
        <Button 
        variant="light" 
        onClick={() => setCity(item)}>
          {item}
        </Button> //onClick 익명함수 공부
      ))}
    </div>
  );
};

//리액트는 단방향적으로 부모가 자식에게줄순 있지만 자식이 부모에게 줄순없다
//그러므로 app이 필요한 모든 함수와 state를 부모가 가지고있고 props로 자식에게 넘겨준다
//부모에게 받은 정보를 이용해 자식이 업데이트를 한다.
//업데이트 함수 또한 부모가 만들어 props로 자식에게 넘겨준다.
