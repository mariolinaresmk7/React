import Item from "../Item/Item";
import "./ItemList.css"
export const ItemList = ({ items, seeMore }) => {
  return (
    <>
    <div className="flex-wrap d-flex item-card justify-content-center" id="categoria">
      {items.map((element) => {
          return (
            <div >
              <Item item={element} key={element.id} />
            </div>
          );
      })}
    </div>
    <button className="my-5 btn offset-5 btn-success seeMore" onClick={seeMore}>Ver Mas</button>
    </>
  );
};
