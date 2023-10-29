import { CDN_URL } from "../utils/common";

export const RestoCard = (props) => {
  const { resData } = props;

  return (
    <div className="m-2 p-2 w-[200px] h-[350px] bg-gray-200 rounded-lg">
      <img
        className="rounded-lg shadow-lg h-[50%] w-[180px]"
        alt="res-logo"
        src={`${CDN_URL}${resData.cloudinaryImageId}`}
      />
      <h3 className="font-bold text-sm py-2">{resData.name}</h3>
      <h5 className="text-sm">{resData.cuisines.join(", ")}</h5>
      <h5 className="font-bold">⭐{resData.avgRating} stars</h5>
    </div>
  );
};

export default RestoCard;
