import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

function Item({ item }) {
  const onAdd = (cant) => {
    console.log(`cantidad agragada al carrito: ${cant}`);
    alert(`Cantidad agragada al carrito: ${cant}`);
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img 
          variant="top"
          src={item.thumbnail}
          style={{ backgroundSize: "cover" }}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>$ {item.price}</Card.Text>
          <ItemCount initial={1} stock={9} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
