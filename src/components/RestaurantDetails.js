import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const menuData = useRestaurantMenu(resId);
  if (menuData === null) return <Shimmer />;
  const {
    name,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    avgRatingString,
  } = menuData.cards[0].card.card.info;

  // const { itemCards } =
  //   menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;
  const categories =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (a) =>
        a?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-2xl p-1">{name}</h1>
      <h4 className="m-2 text-lg font-bold">{cuisines.join(", ")}</h4>
      {categories.map((category, index) => (
        <RestaurantCategories
          data={category?.card.card}
          key={category?.card.card.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantDetails;
