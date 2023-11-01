import { CDN_URL } from "../utils/common";

const ItemList = ({ categoryItem }) => {
  return (
    <div>
      {categoryItem.map((item, index) => (
        <div
          className="text-left text-sm flex justify-between border-b-2 border-y-slate-400"
          key={index}
        >
          <div className="w-9/12 p-2">
            <span>
              {item?.card?.info.itemAttribute.vegClassifier === "VEG"
                ? "🍏"
                : "🍗"}
            </span>
            <h5>
              <span className="text-lg font-bold">{item?.card?.info.name}</span>
              - ₨: {item?.card?.info.price / 100}
            </h5>
            <span className="text-sm">{item?.card?.info.description}</span>
          </div>
          <div className="p-2 w-3/12">
            <div className="m-auto absolute">
              <button className="p-2 bg-black text-white rounded shadow-lg mx-10">
                Add +
              </button>
            </div>
            <img
              className="rounded-lg"
              src={`${CDN_URL}${item?.card?.info.imageId}`}
              alt={item?.card?.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
