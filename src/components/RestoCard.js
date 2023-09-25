import { CDN_URL } from "../utils/common";

export const RestoCard = (props) => {
  const { resData } = props;

  return (
    <div className="resto-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${resData.cloudinaryImageId}`}
      />
      <h3>{resData.name}</h3>
      <h5>{resData.cuisines.join(", ")}</h5>
      <h5>{resData.avgRating} stars</h5>
    </div>
  );
};

export default RestoCard;
