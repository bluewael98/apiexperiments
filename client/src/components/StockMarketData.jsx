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

  return (
    <div className=" h-[400px] bg-neoblue w-[400px] font-Oswald my-10 rounded-full border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl flex flex-col items-center justify-center">
      {/* STOCK LOGO */}
      <div className="flex justify-center items-center align-top">
        <img
          src={teslatext}
          alt="tesla text"
          className="w-[200px] h-[80px] object-cover"
        />
      </div>

      <div className=" bg-neogreen w-[300px] h-[300px] rounded-full flex align-bottom truncate flex-col">
        {/* STOCK NAME & PRICE */}
        <div className="flex justify-between mx-10 mt-20
        ">
          <p className="text-xl font-semibold">TSLA</p>
          <p className="text-xl font-semibold">
            Price:{" "}
            <span className="">
              {" "}
              $
              {data.data && data.data.find((d) => d.ticker === "TSLA")["price"]}
            </span>
          </p>
        </div>
        {/* 24H STATS */}
        <div className="flex flex-col align-middle justify-center items-center mt-5 leading-10  mx-10 font-semibold text-xl">
          <p>
            24H Low:
            {data.data && data.data.find((d) => d.ticker === "TSLA")["day_low"]}
          </p>
          <p>
            24H High:
            {data.data &&
              data.data.find((d) => d.ticker === "TSLA")["day_high"]}
          </p>
          <p>
            24h Change:{" "}
            {data.data &&
              data.data.find((d) => d.ticker === "TSLA")["day_change"]}
            %
          </p>
        </div>
      </div>
    </div>
  );
}

export default StockMarketData;
