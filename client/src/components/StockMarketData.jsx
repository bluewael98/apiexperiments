import React, { useState, useEffect } from "react";
import axios from "axios";
import teslatext from "../assets/teslalogo.svg";

function StockMarketData() {
  const [data, setData] = useState({});
  const url =
    "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=nPfA2dsE2hQiKIK0btfKvRBVtuN5UPv5QRbzHsZU";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, [url]);

  function ColorNumber({ number }) {
    let color = "green";
    if (number < 0) {
      color = "red";
    }
  }
  return (
    <div className=" h-[250px] w-[400px] bg-white rounded-lg flex flex-col">
      <div className="flex justify-between items-center">
        <img src={teslatext} alt="tesla text" className="w-[100px] mt-5 ml-5" />
      </div>

      <div className="flex justify-start flex-col ">
        <p className=" ml-5 text-xl">TSLA</p>
        <p className=" ml-5 text-xl font-semibold">
          Price:{" "}
          <span className="">
            {" "}
            ${data.data && data.data.find((d) => d.ticker === "TSLA")["price"]}
          </span>
        </p>
      </div>

      <div>
        <p>
          {data.data && data.data.find((d) => d.ticker === "TSLA")["day_low"]}
        </p>
        <p>
          {data.data && data.data.find((d) => d.ticker === "TSLA")["day_high"]}
        </p>
      </div>
      <div>
        <p>
          {data.data &&
            data.data.find((d) => d.ticker === "TSLA")["day_change"]}
        </p>
      </div>
    </div>
  );
}

export default StockMarketData;
