
import ItemsList from "./ItemsList";

const ItemsCategory = ({category, setShowIndex, showItems}) => {


  const { itemCards } =
    category?.card?.card;

    const handleClick = () => {
        setShowIndex();
      };
    
  return (
    <div
      className="pt-5 pb-0 border-2 shadow-lg bg-slate-50 border-gray-200 mt-2 px-4 "
      key={category.card.card.title}
    >
      <div className="flex justify-between pr-8 mb-4 cursor-pointer" onClick={handleClick}>
        <h3 className="font-bold text-xl">
          {category?.card?.card?.title} (
          {category?.card?.card?.itemCards.length})
        </h3>
        {showItems === false ? <span>⬇️</span> : <span>⬆️</span>}
      </div>
      {showItems &&
        itemCards.map((item, i) => <ItemsList key={i} item={item} />)}
    </div>
  );
};

export default ItemsCategory;