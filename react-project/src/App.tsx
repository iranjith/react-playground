import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {

    const [cartItems, setCartItems]= useState(['Product 1','Product 2'])

    return (
    <div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={()=>setCartItems([])}></Cart>
    </div>
  );
}

export default App;
