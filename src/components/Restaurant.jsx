import ShimmerResMenuCard from "./ShimmerResMenuCard.jsx";
import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";
import ItemsCategory from "./ItemsCategory";
import { useState } from "react";

const Restaurant = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useResInfo(resId);

  if (resInfo === null) return <ShimmerResMenuCard />;

  const {
    name,
    locality,
    sla,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
  } = resInfo.data.cards[0].card.card.info;

  const itemCategories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (element) =>
        element?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="px-[7rem] flex justify-center ">
      <div className=" w-[40vw] border border-gray-200 shadow-lg h-max my-12 flex justify-center flex-col p-5 bg-slate-100   ">
        <div className="flex justify-between border-b-2 border-dotted border-gray-400 p-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">{name}</h2>
            <h4 className="text-gray-500">{cuisines.join(", ")}</h4>
            <h4 className="text-gray-500">{locality}</h4>
          </div>

          <div className="border border-gray-300 border-solid flex flex-col px-2 h-max py-1 justify-center  ">
            <h4 className="text-green-600 font-bold text-xl border-b border-gray-500 border-dotted flex items-center gap-2 justify-start">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>{avgRating}</span>
            </h4>
            <h4 className="text-gray-500">{totalRatingsString}</h4>
          </div>
        </div>

        <div className="flex gap-12 py-6 font-bold text-md border-b-2 border-dotted border-gray-400 px-4">
          <h4>{sla.slaString}</h4>
          <h4>{costForTwoMessage}</h4>
        </div>

        {itemCategories.map((category, index) => (
          <ItemsCategory
            setShowIndex={() => {
              showIndex == index ? setShowIndex(null) : setShowIndex(index)
            }}
            showItems={showIndex === index}
            category={category}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;