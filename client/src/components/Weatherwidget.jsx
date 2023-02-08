import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherWidget() {
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=sydney&units=metric&appid=15dd8c04c38f4311c59fac2bc55a3fb5`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div className=" flex flex-row justify-between items-center w-[200px] h-[100px]  rounded m-0 bg-slate-500">
      {data.weather ? (
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />
      ) : (
        <p>...Loading</p>
      )}
      <div className="location text-white text-lg flex flex-col mx-2">
        {data.main ? (
          <p className="font-bold">{data.main.temp}°C</p>
        ) : (
          <p>...Loading</p>
        )}
        {data.weather ? (
          <p className="font-semibold">
            {data.weather[0].description.charAt(0).toUpperCase() +
              data.weather[0].description.slice(1)}
            .
          </p>
        ) : (
          <p>...Loading</p>
        )}
      </div>
    </div>
  );
}
export default WeatherWidget;
