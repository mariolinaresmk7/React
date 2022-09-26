import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { ItemCart } from "./ItemCart";
const style = {
  fontFamily: "Lexend Exa, sans-serif",
  color: "white",
};

export const Cart = () => {
  const { cart, clearCart, totalPriceCart} =
    useContext(CartContext);
if ( cart.length === 0) {
  return <> <h2>Tu carrito esta vacio</h2>
  <button className="btn btn-secondary"><Link to={"/"} style={{textDecoration:"none"}}>Volver a Comprar</Link></button></>
}
  return (
    <div style={{backgroundColor:"gray", height:"100vh"}}>
      <h2 style={style}>Carrito De Compras</h2>
      <hr />
      {cart.map((item) => (
        <ItemCart item={item}/>
      ))}
      
      {totalPriceCart() ? (
        <>
          <h3 style={style}>Total: {totalPriceCart()} </h3>{" "}
          <button style={style} className="ml-10 btn btn-danger" onClick={clearCart}>
            Limpiar Carrito{" "}
          </button>
        </>
      ) : null}
    </div>
  );
};
