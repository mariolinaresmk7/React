import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { ItemList } from "./ItemList";
import { db } from "../Firebase/Config";
import { collection, getDocs, query, where } from "firebase/firestore";

const style = {
  //backgroundColor: "#1d1e22",
  color: "white",
  marginTop: "20px",
  height: "40px",
  fontFamily: "Lexend Exa, sans-serif",
  textAlign: "center",
  fontSize: "20px",
};

const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  console.log(categoryId);
  useEffect(() => {
    setLoading(true);
    const productRef = collection(db, "productos");
    const q = categoryId
      ? query(productRef, where("categoria", "==", categoryId))
      : productRef;
    getDocs(q)
      .then((resp) => {
        const productosDB = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(productosDB);
        setProduct(productosDB);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="container">
      <h6 style={style}>{props.greeting}</h6>
      {loading ? <Loader /> : <ItemList items={product} />}
    </div>
  );
};
export default ItemListContainer;
