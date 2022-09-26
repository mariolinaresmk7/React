import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { ItemList } from "./ItemList";

const style = {
  //backgroundColor: "#1d1e22",
  color: "white",
  marginTop: "20px",
  height: "40px",
  fontFamily: "Lexend Exa, sans-serif",
  textAlign: "center",
  fontSize:"20px"
};


const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  console.log(categoryId);
  const searchProduct = async () => {
    if (categoryId === undefined) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=gamer&limit=6`
        );
        const data = await response.json();
        console.log(data.results);
        setProduct(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=${categoryId}&limit=4`
        );
        const data = await response.json();
        console.log(data.results);
        setProduct(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    searchProduct();
  }, [categoryId]);

  return (
    <div className="container">
      <h6 style={style}>{props.greeting}</h6>
      {loading ? <Loader/> : <ItemList items={product} />}
    </div>
  );
};
export default ItemListContainer;
