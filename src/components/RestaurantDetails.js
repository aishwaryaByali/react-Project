import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  if (menuData === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines, avgRatingString } =
    menuData.cards[0].card.card.info;

  const { itemCards } =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log("itemCards", menuData);
  return (
    <div>
      <h1>{name}</h1>
      <h3>costForTwo Rs: {costForTwoMessage}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRatingString}*stars</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}: - Rs{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantDetails;
