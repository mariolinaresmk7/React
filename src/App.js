import { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Container/ItemDetailContainer';
import ItemListContainer from './Container/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
