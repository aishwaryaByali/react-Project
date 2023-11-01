import { CDN_URL } from "../utils/common";

export const RestoCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-2 p-2 w-[200px] h-[300px] bg-gray-200 rounded-lg">
      <img
        className="rounded-lg shadow-lg h-[50%] w-[180px]"
        alt="res-logo"
        src={`${CDN_URL}${resData.cloudinaryImageId}`}
      />
      <h3 className="font-bold text-sm py-2 px-1">{resData.name}</h3>
      <h3 className="text-sm text-ellipsis w-48 whitespace-nowrap overflow-hidden px-1">
        {resData.cuisines.join(", ")}
      </h3>
      <h5 className="font-bold">⭐{resData.avgRating} stars</h5>
      <h3>{resData.areaName}</h3>
    </div>
  );
};
export const offerTagRestoCard = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">
          offer
        </label>
        <RestoCard {...props} />
      </div>
    );
  };
};
export default RestoCard;
