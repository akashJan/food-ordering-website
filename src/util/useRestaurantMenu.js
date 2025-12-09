import React, { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);

      if (!response.ok) {
        throw new Error("Failed to fetch menu: " + response.status);
      }

      const text = await response.text();

      try {
        const json = JSON.parse(text);
        setResInfo(json.data);
      } catch (err) {
        console.error("JSON parse error:", err);
        console.log("Response was:", text); // show HTML
      }
    } catch (error) {
      console.error("Menu API Error:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
