import Item from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="justify-center d-flex">
      {items.map((element) => {

          return (
            <div>
              <Item item={element} key={element.id} />
            </div>
          );

      })}
    </div>
  );
};
