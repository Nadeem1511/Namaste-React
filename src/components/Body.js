import { useState, useEffect } from "../../node_modules/react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurents, setListOfRestaurents] = useState([]);
  const [filteredListOfRestaurents, setFilteredListOfRestaurents] = useState(
    []
  );

  const [searchData, setSearchData] = useState("");

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
    setFilteredListOfRestaurents(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
            type="text"
            className="srch-box"
            placeholder="Search Restaurents"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="srch-btn"
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
          className="top-res"
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
      <div className="restro-container">
        {filteredListOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
