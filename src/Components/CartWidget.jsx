const style = {
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "Lexend Exa, sans-serif",
    color: "white",
  };
  const CartWidget = ({ cart }) => {
    return (
        <>
      <i className="text-xl cursor-pointer col-md-2 ri-shopping-cart-line" style={{color: "white"}}>
        <span style={style}> {cart > 1 ? `${cart} Productos` : "Mi Carrito"}</span>
      </i>
      </>
    );
  };
  export default CartWidget;
  