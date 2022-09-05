import Item from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="col-md-10 d-flex flex-row">
      {items.map((element) => {
        return (
          <div key = {element.id}>
            <Item item = {element} />
          </div>
        );
      })}
    </div>
  );
};
