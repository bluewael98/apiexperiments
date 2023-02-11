import React, { useState, useEffect } from "react";
import axios from "axios";
import photo from "../assets/photo.webp";

function StockMarketNews() {
  const [data, setData] = useState({});
  const url =
    "https://api.stockdata.org/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=nPfA2dsE2hQiKIK0btfKvRBVtuN5UPv5QRbzHsZU";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center">
      {/* ARTICLE 1 */}

      <div className=" bg-white flex justify-center content-center m-5 rounded-2xl w-[800px]">
        <div className="flex flex-col justify-start mx-5 my-5 w-[400px]">
          {/* ARTICLE 1 TITLE */}
          <div className=" font-Oswald font-bold text-xl justify-center content-center flex">
            {data.data && data.data.length > 0 && data.data[0].title}.
          </div>

          {/* ARTICLE 1 DESCRITION */}
          <div>
            {data.data && data.data.length > 0 && data.data[0].description}
          </div>
        </div>

        {/* ARTICLE 1 IMG */}
        <div className="flex justify-end">
          {data.data && data.data.length > 0 && (
            <img
              src={data.data[0].image_url}
              alt="article img"
              className="w-[300px] object-cover rounded-lg my-5 mx-5"
            />
          )}
        </div>
      </div>

      <div className=" bg-white flex justify-center content-center m-5 rounded-2xl w-[800px]">
        <div className="flex flex-col justify-start mx-5 my-5 w-[400px]">
          {/* ARTICLE 1 TITLE */}
          <div className=" font-Oswald font-bold text-xl justify-center content-center flex">
            {data.data && data.data.length > 1 && data.data[1].title}.
          </div>

          {/* ARTICLE 1 DESCRITION */}
          <div>
            {data.data && data.data.length > 1 && data.data[1].description}
          </div>
        </div>

        {/* ARTICLE 1 IMG */}
        <div className="flex justify-end">
          {data.data && data.data.length > 0 && (
            <img
              src={data.data[1].image_url}
              alt="article img"
              className="w-[300px] object-cover rounded-lg my-5 mx-5"
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default StockMarketNews;
