import { useState, useEffect } from "react";
import RestoCard, { offerTagRestoCard } from "./RestoCard";
import Shimmer from "./Shimmer";
import _ from "lodash";
import { Link } from "react-router-dom";
import useApi from "../utils/useApi";
import { RES_DATA } from "../utils/common";

const Body = () => {
  const apiRestaurantData = useApi(RES_DATA);
  const [searchValue, setSearchValue] = useState("");
  const [filteredResto, setFilterRestro] = useState(apiRestaurantData); // it is bascially array destructuring
  useEffect(() => {
    setFilterRestro(apiRestaurantData);
  }, [apiRestaurantData]);
  const OffersRestoCard = offerTagRestoCard(RestoCard);
  // Conditional Rendering
  // if (restaurantData.length === 0) {
  //   return <Shimmer />;
  // }
  return _.isEmpty(apiRestaurantData) ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex m-1 p-1">
        <div className="">
          <input
            className="border-black rounded-lg border-solid border-2 mx-1"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="rounded-lg bg-teal-400 px-3 py-1 m-2"
            onClick={() => {
              const searchedResto = apiRestaurantData.filter((i) =>
                _.lowerCase(i.info.name).includes(_.lowerCase(searchValue))
              );
              setFilterRestro(searchedResto);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="border border-solid rounded-lg m-2 py-1 px-2 bg-gray-200"
            onClick={() => {
              const filterData = apiRestaurantData.filter(
                (i) => i.info.avgRating > 4.0
              );
              setFilterRestro(filterData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResto &&
          filteredResto.map((a) => {
            return (
              <Link key={a.info.id} to={"/restaurants/" + a.info.id}>
                {/* <RestoCard resData={a.info} /> */}
                {a.info.aggregatedDiscountInfoV3 &&
                a?.info?.aggregatedDiscountInfoV3.discountTag ===
                  "FLAT DEAL" ? (
                  <OffersRestoCard resData={a.info} />
                ) : (
                  <RestoCard resData={a.info} />
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
