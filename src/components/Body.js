import { useState, useEffect } from "../../node_modules/react";
import RestaurentCard, { withVegLabel } from "./RestaurentCard";
import { APP_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurents, setListOfRestaurents] = useState([]);
  const [filteredListOfRestaurents, setFilteredListOfRestaurents] = useState(
    []
  );
  const [searchData, setSearchData] = useState("");

  const RestaurentCardVeg = withVegLabel(RestaurentCard);

  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    const data = await fetch(APP_URL);

    const json = await data.json();

    setListOfRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center mt-[200px] text-amber-700 font-semibold">
        Oops..looks like you are offline!! Please check your internet.
      </h1>
    );

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center mt-3 mb-3 ml-3">
        <div className="mr-10 ml-5">
          <input
            type="text"
            className="m-1 p-1"
            placeholder="Search Restaurents"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="p-2 m-2 cursor-pointer text-yellow-300 bg-amber-700 font-medium rounded-lg"
            onClick={() => {
              const filteredRestaurent = listofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchData.toLowerCase())
              );
              setFilteredListOfRestaurents(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="p-3 m-2 cursor-pointer bg-yellow-300 text-amber-700 font-medium rounded-lg"
          onClick={() => {
            const filteredList = listofRestaurents.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredListOfRestaurents(filteredList);
          }}
        >
          Top Restaurent
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurents.map((restaurent) => (
          <Link
            className="menu-link"
            key={restaurent.info.id}
            to={"/restaurent/" + restaurent.info.id}
          >
            {restaurent.info.isOpen ? (
              <RestaurentCardVeg resData={restaurent} />
            ) : (
              <RestaurentCard resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
