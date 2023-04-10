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
