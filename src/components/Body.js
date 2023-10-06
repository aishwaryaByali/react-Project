import { useState, useEffect } from "react";
import RestoCard from "./RestoCard";
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

  // Conditional Rendering
  // if (restaurantData.length === 0) {
  //   return <Shimmer />;
  // }
  return _.isEmpty(apiRestaurantData) ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = apiRestaurantData.filter(
              (i) => i.info.avgRating > 4
            );
            setFilterRestro(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-Container">
        {filteredResto &&
          filteredResto.map((a) => {
            return (
              <Link key={a.info.id} to={"/restaurants/" + a.info.id}>
                <RestoCard resData={a.info} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
