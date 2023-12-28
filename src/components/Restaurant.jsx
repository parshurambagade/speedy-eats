import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";

const Restaurant = () => {
  const { resId } = useParams();

  const resInfo = useResInfo(resId);

  if (resInfo === null) return <ShimmerCard />;

  const {
    name,
    locality,
    sla,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
  } = resInfo.data.cards[0].card.card.info;

  // *************** THIS WILL FETCH RECOMMANDED ITEMS BUT DUE TO INCONSISTANCY IN SWIGGY'S API, IT THROWS ERROR (NOT ALL RESTAURANTS HAVE RECOMMANDED MENUE ITEMS) ****************
  // const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // console.log(itemCards);

  return (
    <div className="px-[7rem]  flex justify-center">
      <div className="border w-[40vw] border-gray-200 bg-slate-100 h-max my-12 flex justify-center flex-col p-5  ">

      <div className="flex justify-between border-b-2 border-dotted border-gray-400 py-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl">{name}</h2>
          <h4 className="text-gray-500">{cuisines.join(", ")}</h4>
          <h4 className="text-gray-500">{locality}</h4>
        </div>

        <div className="border border-gray-300 border-solid flex flex-col px-2 h-max py-1 justify-center  ">
          <h4 className="text-green-600 font-bold border-b border-gray-500 border-dotted">{avgRating}</h4>
          <h4 className="text-gray-500">
            {totalRatingsString}
          </h4>
        </div>
      </div>

      <div className="flex gap-12 py-6 font-bold text-md border-b-2 border-dotted border-gray-400">
        <h4>{sla.slaString}</h4>
        <h4>{costForTwoMessage}</h4>
      </div>

      <div className="py-5">
        <h3 className="font-bold text-lg mb-3">Recommanded</h3>
        <ul className="flex flex-col gap-3">
          {itemCards.map((item, i) => {
            return (
              <li key={i} className="flex justify-between">
                <span>{item?.card?.info?.name}</span>{" "}
                <span>Rs. {item?.card?.info?.price / 100}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Restaurant;
