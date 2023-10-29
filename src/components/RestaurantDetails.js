import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/common";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  if (menuData === null) return <Shimmer />;
  const {
    name,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    avgRatingString,
  } = menuData.cards[0].card.card.info;

  const { itemCards } =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log("itemCards", menuData);
  return (
    <div className="m-4 p-4 border shadow-lg flex justify-between w-[75%]">
      <div>
        <h1 className="font-bold text-lg p-1">{name}</h1>
        <h3 className="m-2">
          <span className="font-bold text-sm">costForTwo Rs:</span>{" "}
          {costForTwoMessage}
        </h3>
        <h4 className="m-2">{cuisines.join(", ")}</h4>
        <h3 className="font-bold text-sm">⭐{avgRatingString} stars</h3>
        <h3 className="font-bold my-2">Menu</h3>
        <ul className="p-2 mx-2">
          {itemCards.map((item) => (
            <li key={item.card.info.id} className="list-disc">
              {item.card.info.name}: - Rs{item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img
          className="rounded-lg shadow-lg h-[75%] w-[200px]"
          alt="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
      </div>
    </div>
  );
};
export default RestaurantDetails;
