import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../util/useRestaurantMenu";

// https://proxy.corsfix.com/?
// https://corsproxy.io/?
// https://api.allorigins.win/raw?

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { title } =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const { itemCards } =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  console.log(
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards
  );

  return (
    <div className="menu">
      <h1>Menu</h1>
      <h2>{title}</h2>
      <ul>
        {itemCards?.map((item) => (
          <div key={item.card.info.id} className="m-2 border-2 p-2">
            <li>{item.card.info.name}</li>
            <li>{item.card.info.category}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
