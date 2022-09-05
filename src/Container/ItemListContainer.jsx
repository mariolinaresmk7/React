import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

const style = {
  backgroundColor: "#1d1e22",
  color: "white",
  marginTop: "20px",
  height: "40px",
};
const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const searchProduct = async () => {
    try {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=mexx&limit=5"
      );
      const data = await response.json();
      console.log(data.results);
      setProduct(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchProduct();
  }, []);

  return (
    <div>
      <h6 style={style}>{props.greeting}</h6>
      <ItemList items={product} />
    </div>
  );
};
export default ItemListContainer;
