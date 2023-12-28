import { RESTO_IMG } from "../utils/constants";

const Card = ({restaurant}) => {
    
    const {cloudinaryImageId, avgRating, name, cuisines, costForTwo, sla, area} = restaurant;

    const imgSrc = `${RESTO_IMG}${cloudinaryImageId}`;
    
   
    return (
        <div className="flex flex-col border border-solid border-gray-300 rounded-lg shadow-lg hover:shadow-2xl bg-slate-100">
    
             <img src={imgSrc} alt="resto img" className="h-60 rounded-t-lg"/>

             <div className="px-4 py-2 flex flex-col gap-2">
                <h3 className="text-xl font-bold">{name}</h3>
                <h4 className="cuisines">{cuisines.join(', ')}</h4>
                <h4 className="cost">{costForTwo}</h4>
                <h4 className="delivery-time">{sla.slaString}</h4>
                <h4 className="avg-rating">{avgRating}</h4> 
                <h4 className="area">{area}</h4> 
             </div>
        </div>
    )
}

export const PureVegCard = (Card) => {
    return (props) => {
      return <div> 
      <span className="relative bg-green-600 text-white p-2 rounded top-12 -left-2 text-lg font-bold">Pure Veg</span>
      <Card {...props} />   
      </div>
    }
  }

export default Card;