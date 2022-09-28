import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
const style = {
  fontFamily: "Lexend Exa, sans-serif",
  color: "white",
};

export const ItemCart = ({item}) => {
  const {  removeItemCart } = useContext(CartContext);
  return (
    <div className="row" style={style} key={item.id}>
      <h2 className="col-lg-4">{item.nombre}</h2>
      <h3 className="col-lg-4">Precio: ${item.precio}</h3>
      <h3>Cantidad: {item.cantidad}</h3>
        
      <i
        onClick={() => removeItemCart(item.id)}
        className="text-4xl cursor-pointer col-lg-2 text-rose-700 ri-delete-bin-line"
      ></i>
    </div>
  );
};

