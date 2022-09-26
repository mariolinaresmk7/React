import Item from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="justify-center d-flex">
      {items.map((element) => {
        if (element.available_quantity > 0) {
          return (
            <div>
              <Item item={element} key={element.id} />
            </div>
          );
        } else { return null }
      })}
    </div>
  );
};
