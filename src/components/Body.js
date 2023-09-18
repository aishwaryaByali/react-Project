import { useState, useEffect } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]); // it is bascially array destructuring
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
  };

  if (restaurantData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const list = data.filter((i) => i.data.avgRating > 4.1);
            setRestaurantData(list);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-Container">
        {restaurantData.map((a, index) => {
          return <RestoCard resData={a.info} key={a.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
