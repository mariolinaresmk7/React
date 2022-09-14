import ItemCount from "./ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const [buy, setBuy] = useState(false);

  const onAdd = () => {
    setBuy(true);
    const itemToCart = {
      id: item.id,
      precio: item.price,
      nombre: item.title,
      cantidad,
    };
    console.log(itemToCart);
    console.log({ ...item, cantidad });
    alert(`Su producto fue agregado con exito al carrito`);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-x-8 lg:px-8">
          <div className="hidden overflow-hidden rounded-lg aspect-w-3 aspect-h-4 lg:block">
            {item.pictures.map((pic) => {
              return <img src={pic.url} />;
            })}
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {item.title}
            </h1>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {item.available_quantity}$ {item.price}
            </p>
            <form className="mt-10">
              {buy ? (
                <Button><Link style={{textDecoration: "none", color: "white"}} to={"/cart"}>Terminar Compra</Link></Button>
              ) : (
                <ItemCount
                  stock={item.available_quantity}
                  counter={cantidad}
                  setCounter={setCantidad}
                  onAdd={onAdd}
                />
              )}

              {/* <button
                type="submit"
                className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Añadir al Carrito
              </button> */}
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
