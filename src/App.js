import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./Components/Cart";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Container/ItemDetailContainer";
import ItemListContainer from "./Container/ItemListContainer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting= "Equipate con lo mejor" />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemsId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Navigate to='/' />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
