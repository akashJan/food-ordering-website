import React, { useContext } from "react";
import { CDN_URL } from "./../util/constants";
import UserContext from "../util/UserContext";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      className="
        w-60 p-4 m-4 rounded-xl bg-white shadow-md 
        transition transform duration-200 
        hover:scale-105 hover:shadow-xl
        font-sans
      "
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <h3 className="text-lg font-semibold mb-1">{name}</h3>

      <h4 className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</h4>

      <h4 className="text-sm text-gray-600 mb-1">⭐ {avgRating}</h4>

      <h4 className="text-sm text-gray-600 mb-1">{costForTwo}</h4>

      <h4 className="text-sm text-gray-600">{sla?.deliveryTime} mins</h4>
      {/* <h4 className="text-sm text-gray-600">{loggedInUser}</h4> */}
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-black text-white text-sm font-semibold px-3 py-1 rounded-lg z-50">
          Open
        </span>

        <RestaurantCard {...props} />
      </div>
    );
  };
};
