import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantHome.css";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4512829&lng=73.8749514&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const apiRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log(apiRestaurants);
    setRestaurants(apiRestaurants);
    setFilteredRestaurant(apiRestaurants);
  };

  const handleTopRated = () => {
    const filteredList = restaurants.filter((res) => res.info.avgRating >= 4.5);
    setFilteredRestaurant(filteredList);
  };

  const handleSearch = () => {
    const filteredSearch = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredSearch);
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-bar">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
