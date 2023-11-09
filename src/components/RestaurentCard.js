import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, areaName } = resData?.info;
  const { slaString, lastMileTravelString } = resData?.info?.sla;

  console.log(resData);

  return (
    <div className="m-4 p-4 w-[225px] h-[360px] rounded-lg bg-amber-200 hover:bg-amber-300">
      <img
        className="w-[100%] h-32 rounded-lg"
        alt="logo-restaurent"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold mt-5 text-amber-900">{name}</h3>
      <h3 className="font-medium text-amber-800">{cuisines.join(", ")}</h3>
      <h3 className="font-medium text-amber-800">{areaName}</h3>
      <h3 className="font-medium text-amber-800">
        {lastMileTravelString + " From Your House"}
      </h3>
      <h3 className="font-medium text-amber-800">{slaString + " 🛵💨"}</h3>
    </div>
  );
};

export const withVegLabel = (RestaurentCard) => {
  return (props) => {
    const { resData } = props;
    return (
      <div className="relative">
        <label className="absolute ml-6 mt-2 p-2 bg-green-700 text-white font-mono rounded-lg">
          {resData?.info?.avgRatingString + "★"}
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};
export default RestaurentCard;
