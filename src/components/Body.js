import { useState, useEffect } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import _ from "lodash";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]); // it is bascially array destructuring
  const [searchValue, setSearchValue] = useState("");
  const [filteredResto, setFilterRestro] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.521266&lng=73.98257339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restoList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantData(restoList);
    setFilterRestro(restoList);
  };
  // Conditional Rendering
  // if (restaurantData.length === 0) {
  //   return <Shimmer />;
  // }

  return _.isEmpty(restaurantData) ? (
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
              const searchedResto = restaurantData.filter((i) =>
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
            const filterData = restaurantData.filter(
              (i) => i.info.avgRating > 4
            );
            setFilterRestro(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-Container">
        {filteredResto.map((a) => {
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
