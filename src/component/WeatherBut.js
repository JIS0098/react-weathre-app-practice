import React from "react";
import { Button } from "react-bootstrap";

export const WeatherBut = ({ cities, selectCity, handleCityChange }) => {
  return (
    <div className="but-box">
      <Button variant={`${selectCity==null? "outline-light":"light"}`}
         onClick={() => handleCityChange("current")}>현재위치</Button>

      {cities.map((item) => (
        <Button
          variant={`${item==selectCity? "outline-light":"light"}`}
          onClick={() => handleCityChange(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};



