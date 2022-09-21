import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { useState } from "react";

const style = {
  cursor: "pointer",
  fontSize: "12px",
  fontFamily: "Lexend Exa, sans-serif",
  color: "white",
};
const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);
  return (
    <>
      <Link to={"/cart"} style={{ textDecoration: "none" }}>
        <i
          className="text-xl cursor-pointer col-md-2 ri-shopping-cart-line"
          style={{ color: "white" }}
        >
          <span style={style}>
            {cartQuantity()? " Tienes " + cartQuantity() + " art" : "Mi carrito" } 
          </span>
        </i>
      </Link>
    </>
  );
};
export default CartWidget;
