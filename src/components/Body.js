import { useState, useEffect } from "../../node_modules/react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurennts, setListOfRestaurents] = useState([]);

  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurents(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listofRestaurennts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="top-res"
          onClick={() => {
            const filteredList = listofRestaurennts.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurents(filteredList);
          }}
        >
          Top Restaurent
        </button>
      </div>
      <div className="restro-container">
        {listofRestaurennts.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
