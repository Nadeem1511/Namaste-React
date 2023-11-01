import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resid);
    const json = await data.json;
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;