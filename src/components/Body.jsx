import React, { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTS_API } from "../util/constants";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();

    const apiRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestaurants(apiRestaurants);
    setFilteredRestaurant(apiRestaurants);
    // console.log(apiRestaurants);
  };

  const handleTopRated = () => {
    const filteredList = restaurants.filter((res) => res.info.avgRating >= 4);
    setFilteredRestaurant(filteredList);
    // console.log(filteredList);
  };

  const handleSearch = () => {
    const filteredSearch = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredSearch);
  };

  return onlineStatus ? (
    restaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="w-full px-6 py-6">
        {/* 🔍 Top Bar */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* Search Box + Button */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search restaurant..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-64 px-3 py-2 border-2 border-gray-300 rounded-lg outline-none text-lg transition 
                   focus:border-rose-400"
            />

            <button
              onClick={handleSearch}
              className="bg-rose-500 text-white px-5 py-2 rounded-lg text-lg font-semibold
                   transition transform hover:bg-rose-600 hover:scale-105 active:scale-95"
            >
              Search
            </button>
          </div>

          {/* ⭐ Top Rated Button */}
          <button
            onClick={handleTopRated}
            className="bg-green-600 text-white px-5 py-2 rounded-lg text-lg font-semibold
                 transition transform hover:bg-green-700 hover:scale-105 active:scale-95 ml-4"
          >
            Top Rated
          </button>

          <div>
            <label className="font-semibold text-gray-700 pb-1 hover:text-rose-500 transition mr-2">
              User Name :
            </label>
            <input
              className="w-64 px-3 py-2 border-2 border-gray-300 rounded-lg outline-none text-lg transition 
                   focus:border-rose-400"
              placeholder="Type Name..."
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>

        {/* Restaurant Cards Container */}
        <div className="flex flex-wrap justify-center gap-6 px-3">
          {filteredRestaurant.map(
            (res) =>
              res.info.isOpen ? (
                <RestaurantCardPromoted key={res.info.id} resData={res} />
              ) : (
                <RestaurantCard key={res.info.id} resData={res} />
              )
            // <RestaurantCard key={res.info.id} resData={res} />
            //   <Link key={res.info.id} to={"/restaurants" + restaurants.data.id}>
            //   <RestaurantCard resData={res} />
            // </Link>
          )}
        </div>
      </div>
    )
  ) : (
    <h1 className="flex justify-center item-center m-2 font-bold ">
      Looks like internet Connection is disconnected
    </h1>
  );
};

export default Body;
