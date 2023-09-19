import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    areaName,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="img-1"
        alt="logo-restaurent"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRatingString}</h3>
      <h3>{costForTwo}</h3>
      <h3>{areaName}</h3>
    </div>
  );
};

export default RestaurentCard;
