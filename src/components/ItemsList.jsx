import { useDispatch } from "react-redux";
import { NONVEG_ICON, VEG_ICON } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ item }) => {
  const itemImageUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div className="flex flex-col gap-3 my-2">
      <div className="flex justify-between border-t border-gray-300 ">
        <div className="flex flex-col gap-2 py-4 w-3/4 pr-6">
          {item?.card?.info?.isVeg == 1 ? (
            <img
              className="w-6"
              src={VEG_ICON}
              alt="pure veg image"
            />
          ) : (
            <img
              className="w-6"
              src={NONVEG_ICON}
              alt="pure veg image"
            />
          )}
          <span className="text-lg">{item?.card?.info?.name}</span>{" "}
          <span>Rs. {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
        </div>
        <div className="relative pt-3 w-1/4">
          <button className="px-4 py-1 absolute bottom-6 bg-green-500 text-white text-sm border border-solid border-gray-400 m-auto left-10 font-bold rounded" onClick={() => handleAddItem(item)}>
            ADD +
          </button>
          {item?.card?.info?.imageId && (
            <img
              src={itemImageUrl + item?.card?.info?.imageId}
              alt="item image"
              className=" rounded-lg w-full h-[12vh]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;