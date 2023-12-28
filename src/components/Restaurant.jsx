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
    <div className="resto-details">
      <div className="detail-box">
        <div className="resto-info">
          <h2>{name}</h2>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{locality}</h4>
        </div>

        <div className="resto-ratings">
          <h4 style={{ color: "green", fontWeight: "bold" }}>{avgRating}</h4>
          <h4 style={{ color: "gray", fontWeight: "100" }}>
            {totalRatingsString}
          </h4>
        </div>
      </div>

      <div className="second-box">
        <h4>{sla.slaString}</h4>
        <h4>{costForTwoMessage}</h4>
      </div>

      <div className="menu">
        <h3>Recommanded</h3>
        <ul>
          {itemCards.map((item, i) => {
            return (
              <li key={i}>
                <span>{item?.card?.info?.name}</span>{" "}
                <span>Rs. {item?.card?.info?.price / 100}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
