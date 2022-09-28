import ItemCount from "./ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  const { cart, addToCart, isInCart } = useContext( CartContext )
  console.log(cart)
  const onAdd = () => {
    const itemToCart = {
      id: item.id,
      precio: item.precio,
      nombre: item.nombre,
      stock: item.stock,
      cantidad,
    };
    addToCart(itemToCart)
    //console.log(itemToCart);
    //console.log({ ...item, cantidad });
    alert(`Su producto fue agregado con exito al carrito`);
  };

  
  return (
    
    <div className="bg-white">
      <div className="pt-6">
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-x-8 lg:px-8">
          <div className="hidden overflow-hidden rounded-lg aspect-w-3 aspect-h-4 lg:block">
            
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {item.nombre}
              {item.id}
            </h1>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
             
              Cantidad disponible: {item.stock} --  $ {item.precio}
            </p>
            <form className="mt-10">
              {isInCart(item.id)? 
                <Button><Link style={{textDecoration: "none", color: "white"}} to={"/cart"}>Terminar Compra</Link></Button>
               : 
                <ItemCount
                  stock={item.stock}
                  counter={cantidad}
                  setCounter={setCantidad}
                  onAdd={onAdd}
                />
              }
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            <div>
              <h3 className="sr-only">Descripcion</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
