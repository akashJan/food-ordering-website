import React from "react";
import "./RestaurantHome.css";
import {CDN_URL} from "./../util/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt={name} />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
