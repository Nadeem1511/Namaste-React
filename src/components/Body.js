import { useState } from "../../node_modules/react";
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listofRestaurennts, setListOfRestaurents] = useState(resList);

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
