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

  const { name } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>Menu</h1>
      <h2>{name}</h2>
      <ul>
        {itemCards.map((item) => {
          <li>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
