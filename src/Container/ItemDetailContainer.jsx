import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const getItem = async () => {
    try {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=monitores"
      );
      const data = await response.json();
      setProducto(data.results[0]);
      console.log(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

   getItem()
  }, [])
  if(producto == 1){return <p>loading</p>};
  return (
    <>
      <ItemDetail item={producto} />
    </>
  );
};
export default ItemDetailContainer;
