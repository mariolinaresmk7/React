import Button from "react-bootstrap/Button";


const ItemCount = ({ stock, counter, setCounter, onAdd}) => {
 
  const add = (e) => {
    e.preventDefault();
    counter < stock && setCounter(counter + 1);
  };
  const subtract = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
  };
  const reset = (e) => {
    e.preventDefault();
    setCounter(1);
  };

  return (
    <>
      <div>
        <p>Cantidad: {counter}</p>
        <button disabled={counter <= 1} onClick={subtract}>
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
       onClick={() => onAdd(counter)}
        disabled={stock == 0}
        variant="success"
      >
        Añadir al Carrito
      </Button>
    </>
  );
};

export default ItemCount;
