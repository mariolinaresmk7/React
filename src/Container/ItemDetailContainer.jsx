import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemsId } = useParams();
  console.log(itemsId);
  const getItem = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/items/${itemsId}`
      );
      const data = await response.json();
      setProducto(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, []);
  return <>{loading ? <h3>Loading</h3> : <ItemDetail item={product} />}</>;
};
export default ItemDetailContainer;
