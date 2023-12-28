import { Link } from "react-router-dom";
import Card from "./Card";
import ShimmerCard from "./ShimmerCard";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../utils/useResList";

const Body = () => {

  const [search, setSearch] = useState("");

  const [isFiltered, setIsFiltered] = useState(false);

  // console.log("this is resList before useEffect" + resList);
  const isOnline = useOnlineStatus();

  const lists = useResList();

  const {resList, localList, setLocalList} = lists;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredList = resList.filter((res) =>
      res?.info?.name.toLowerCase().includes(search.toLowerCase())
    );

    setLocalList(filteredList);
  };

  const filterHandleClick = () => {
    setIsFiltered(!isFiltered);
  };


  return (isOnline === false ? (<h1 style={{margin: "25vh 25vw"}}>Looks like you are offline! Check your internet connection...</h1>) : (
    <div className="px-[7rem]">
      <div className="flex gap-8 items-center py-8">
        <form onSubmit={handleSubmit} className="flex items-end mb-0 gap-1">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
            className="border border-solid border-black px-2 py-1 rounded"
          />
          <button type="submit" className="border border-solid border-blue-500 bg-blue-500 text-white px-2 py-1 rounded">Search</button>
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
              setLocalList(resList.filter((res) => res?.info?.avgRating > 4));
              filterHandleClick();
            }}
          >
            Top Rated Restaurants
          </button>
        )}
      </div>

      {!resList.length ? (
        <ShimmerCard />
      ) : (
        <div className="flex justify-between flex-wrap gap-8">
          {localList.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={`/restaurants/${restaurant?.info?.id}`} className="w-80"><Card  restaurant={restaurant?.info} /></Link>
            
          ))}
        </div>
      )}
    </div>
  ))
};

export default Body;
