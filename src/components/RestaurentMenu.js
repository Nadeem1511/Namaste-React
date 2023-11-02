import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const itemCategory =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (i) =>
        i.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(itemCategory);

  // const { name, areaName, cuisines, avgRating } =
  //   resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  return (
    <div className="menu-container">
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <p>{resInfo?.cards[0]?.card?.card?.info?.areaName}</p>
      <p>
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} - Ratings:
        {resInfo?.cards[0]?.card?.card?.info?.avgRating}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCategory?.map((item) => (
          <li key={item?.info?.id}>
            {item?.card?.info?.name} - Rs:
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
