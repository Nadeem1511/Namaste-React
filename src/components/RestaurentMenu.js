import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === 0) return <Shimmer />;

  return (
    <div className="bg-yellow-200 h-[100vh]">
      <h1 className="font-[750] text-2xl text-center text-amber-700">
        {resInfo?.cards[0]?.card?.card?.info?.name}
      </h1>
      <h3 className="text-lg text-center">
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ") +
          " - " +
          resInfo?.cards[0]?.card?.card?.info?.city}
      </h3>
      <h2 className="text-xl font-[650] text-amber-700 text-center mt-10 underline underline-offset-4">
        MENU
      </h2>
      <ul className="list-disc ml-[400px] font-semibold text-amber-700  mt-5 ">
        {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (items) => (
            <li key={items.card.info.id} className="w-max">
              {items.card.info.name} - {" Rs."}
              {items.card.info.price / 100 ||
                items.card.info.defaultPrice / 100}
            </li>
          )
        ) ||
          resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[1]?.itemCards?.map(
            (items) => (
              <li key={items.card.info.id} className="w-max">
                {items.card.info.name} - {" Rs."}
                {items.card.info.price / 100 ||
                  items.card.info.defaultPrice / 100}
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
