import { useContext } from "react";
import ItemCount from "../Container/ItemCount";
import { CartContext } from "../Context/CartContext";
const style = {
  fontFamily: "Lexend Exa, sans-serif",
  color: "white",
};

export const Cart = () => {
  const { cart, clearCart, totalPriceCart, removeItemCart } =
    useContext(CartContext);

  return (
    <>
      <h2 style={style}>Carrito De Compras</h2>
      <hr />

      {cart.map((item) => (
        <div className="row" style={style} key={item.id}>
          <h2 className="col-lg-4">{item.nombre}</h2>
          <h3 className="col-lg-4">Precio: ${item.precio}</h3>
          <h3>Cantidad: {item.cantidad}</h3>
          <i
            onClick={() => removeItemCart(item.id)}
            className="text-4xl cursor-pointer col-lg-2 text-rose-700 ri-delete-bin-line"
          ></i>
        </div>
      ))}
      {totalPriceCart() ? (
        <>
          <h3 style={style}>Total: {totalPriceCart()} </h3>{" "}
          <button style={style} className="ml-10 btn btn-danger" onClick={clearCart}>
            Limpiar Carrito{" "}
          </button>
        </>
      ) : null}
    </>
  );
};
