import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../Firebase/Config";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"; 

const CheckOut = () => {
  const [input, setInput] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });
  const { cart, totalPriceCart, setCart } = useContext(CartContext);
 
 
  const handlerInputs = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    const order = {
      comprador: { ...input },
      items: cart,
      total: totalPriceCart(),
    };

    if (input.nombre.length < 3 || input.nombre === "") {
      alert("Nombre incorrect");
      return;
    }
    if (input.email === "" || input.email < 3) {
      alert("Email incorrect");
      return;
    }
    if (input.direccion === "" || input.direccion < 3) {
      alert("Direccion incorrect");
      return;
    }
    
   cart.forEach((items) =>{
      const docRef = doc(db, "productos",items.id)
      getDoc( docRef )
        .then((respuesta) => {
          updateDoc ( docRef, { stock: respuesta.data().stock - items.cantidad})
        }) 
    })

    const orderRef = collection(db, "ordenes");
    addDoc(orderRef, order).then(
      (doc) =>{ setCart([])
        alert(`Su compra fue exitosa, este es su codigo de compra ${doc.id}`)
      }
     
    ); 
    
  };
  if (cart.length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container my-5">
      <h2>Termina tu Compra</h2>
      <hr />
      <form>
        <input
          name="nombre"
          value={input.nombre}
          onChange={handlerInputs}
          type="text"
          className="my-3 form-control"
          placeholder="Nombre y Apellido"
        />
        <input
          name="email"
          type="email"
          value={input.email}
          onChange={handlerInputs}
          className="my-3 form-control"
          placeholder="Email"
        />
        <input
          name="direccion"
          value={input.direccion}
          onChange={handlerInputs}
          type="text"
          className="my-3 form-control"
          placeholder="Dirección"
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlerSubmit}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
export default CheckOut;
