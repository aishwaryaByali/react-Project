import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   const [openItem, setOpenItem] = useState(false);
  const handleClick = (e) => {
    console.log("e", e);
    setShowIndex();
  };
  //  If the component has a state variable then it is a uncontrolled component,
  //  if it's parent is controlled then it is called as controlled component
  //  RestaurantCategory is a controlled component, as it is controlled by its parent by passing showItems
  return (
    <div className="my-4 p-2 w-6/12 mx-auto shadow-lg bg-gray-100 text-left">
      <div
        className="font-bold flex justify-between p-2"
        onClick={(e) => handleClick(e)}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div className="m-2">
        {showItems ? <ItemList categoryItem={data.itemCards} /> : ""}
      </div>
    </div>
  );
};

export default RestaurantCategory;
