import Item from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="justify-center d-flex">
      {items.map((element) => {
        return (
          <div key={element.id}>
            <Item item={element} />
          </div>
        );
      })}
    </div>
  );
};
