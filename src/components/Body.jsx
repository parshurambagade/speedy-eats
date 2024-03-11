import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Card, { PureVegCard } from "./Card";
import ShimmerCard from "./ShimmerCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../utils/useResList";
import resData from "../mocks/mockResList.json";

const Body = () => {
  const resList = resData?.data?.cards?.pune?.card?.gridElements?.infoWithStyle?.restaurants;
  // console.log(resList);
  // const { resList } = useResList();
  const [search, setSearch] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [localList, setLocalList] = useState([]);
  const isOnline = useOnlineStatus();
  const PureVegResto = PureVegCard(Card);

  useEffect(() => {
    setLocalList(resList);  
    // console.log(localList);
  }, [resList]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchedData = resList.filter((res) =>
      res?.info?.name.toLowerCase().includes(search.toLowerCase())
    );

    setLocalList(searchedData);
  };

  const filterHandleClick = () => {
    setIsFiltered(!isFiltered);
  };

  return isOnline === false ? (
    <h1 style={{ margin: "25vh 25vw" }}>
      Looks like you are offline! Check your internet connection...
    </h1>
  ) : !resList ? <h1>No Restaurants...</h1> : (
    <div className="px-4 lg:px-20 pb-20 w-full">
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-start lg:items-center py-8 w-full">
        <form onSubmit={handleSubmit} className="flex items-end mb-0 gap-1 w-full lg:w-max">
          <input
            data-testid="search"
            type="text"
            name="search"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
            className="border border-solid border-slate-400 px-4 py-2 rounded w-[90%]"
            autoComplete="off"
          />
          <button
            type="submit"
            className="border border-solid border-blue-500 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </form>
        {isFiltered ? (
          <button
            className="border border-solid border-black bg-gray-500 px-2 py-1 text-white rounded"
            onClick={() => {
              setLocalList(resList);
              filterHandleClick();
            }}
          >
            All Restaurants
          </button>
        ) : (
          <button
            className="border border-solid border-black bg-gray-500 px-2 py-1 text-white rounded"
            onClick={() => {
              setLocalList(resList.filter((res) => res?.info?.avgRating >= 4.5));
              filterHandleClick();
            }}
          >
            Top Restaurants
          </button>
        )}
      </div>

      {!localList.length ? (
        <ShimmerCard />
      ) : (
        <div className={`grid items-center lg:items-normal grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full`}>
          {localList.map((restaurant) => (
            <div data-testid="res-card" key={restaurant?.info?.id} className="flex lg:max-w-[22rem]">  
              <Link
                to={`/restaurants/${restaurant?.info?.id}`}
                className="w-full"
              >
                {restaurant?.info?.veg ? (
                  <PureVegResto restaurant={restaurant?.info} />
                ) : (
                  <Card restaurant={restaurant?.info} />
                )}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
