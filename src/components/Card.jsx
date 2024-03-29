import { RESTO_IMG } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const Card = ({restaurant}) => {
    const {cloudinaryImageId, avgRating, name, cuisines, costForTwo, sla, area} = restaurant;
    const imgSrc = `${RESTO_IMG}${cloudinaryImageId}`;
    
    return (
        <div className="flex flex-col border border-solid border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-blue-50">
    
             <img src={imgSrc} alt="resto img" className="h-60 md:h-72 rounded-t-lg"/>

             <div className="px-4 py-2 flex flex-col gap-2">
                <h3 className="text-xl font-bold">{name}</h3>
                <h4 className="cuisines">{Array.isArray(cuisines) ? cuisines.join(', ') : cuisines}</h4>
                <h4 className="cost">{costForTwo}</h4>
                <h4 className="delivery-time">{sla?.slaString}</h4>
                <h4 className="avg-rating flex gap-1 items-center text-green-700"><FaStar /><span className="text-black font-bold">{avgRating}</span></h4> 
                <h4 className="area">{area}</h4> 
             </div>
        </div>
    )
}

export const PureVegCard = (Card) => {
    return (props) => {
      return <div className="relative"> 
      <span className="absolute bg-green-600 text-white p-2 rounded top-2 -left-2 text-lg font-bold">Pure Veg</span>
      <Card {...props} />   
      </div>
    }
  }

export default Card;
