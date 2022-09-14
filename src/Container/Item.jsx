import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
const style = {
  width: "14rem",
  fontFamily: "Lexend Exa, sans-serif",
  fontSize: "12px",
};

function Item({ item }) {
  // const onAdd = (cant) => {
  //   console.log(`cantidad agragada al carrito: ${cant}`);
  //   alert(`Cantidad agragada al carrito: ${cant}`);
  // };

  return (
    <div>
      <Card style={style}>
        <Card.Img
          variant="top"
          src={item.thumbnail}
          style={{ backgroundSize: "cover" }}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>$ {item.price} </Card.Text>
          <Button variant="info">
            <Link
              to={`/item/${item.id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              Ver mas
            </Link>
          </Button>
          {/* <ItemCount initial={1} stock={9} onAdd={onAdd} /> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
