import Button from "react-bootstrap/Button";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cart, setCart] = useState(initial);
  const add = () => {
    cart < stock && setCart(cart + 1);
  };
  const subtract = () => {
    setCart(cart - 1);
  };
  const reset = () => {
    setCart(1);
  };

  return (
    <>
      <div>
        <p>Cantidad: {cart}</p>
        <button disabled={cart <= 1} onClick={subtract}>
          <span style={{ fontSize: "38px" }}>
            <i class="ri-subtract-line"></i>
          </span>
        </button>
        <button onClick={reset}>
          <span style={{ fontSize: "38px" }}>
            <i class="ri-restart-line"></i>
          </span>
        </button>
        <button onClick={add}>
          <span style={{ fontSize: "38px" }}>
            <i className="ri-add-circle-line"></i>
          </span>
        </button>
      </div>
      <Button
        onClick={() => onAdd(cart)}
        disabled={stock == 0}
        variant="success"
      >
        Agregar al Carrito
      </Button>
    </>
  );
};

export default ItemCount;
