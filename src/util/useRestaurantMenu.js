import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const url = MENU_API + resId;
      console.log("Fetching: ", url);

      const response = await fetch(url);

      const text = await response.text(); // CHECK RAW RESPONSE
      console.log("Raw Response:", text);

      const json = JSON.parse(text); // If valid JSON, this works

      setResInfo(json.data);
    } catch (error) {
      console.log("Fetch Menu Error →", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
