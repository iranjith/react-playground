import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";

function App() {

  const[drink, setDrink]= useState({
    title:"Americano",
    price: 5
  })

  const handleClick=()=>{
     setDrink({...drink,price:6});
  }

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
     
    </div>
  );
}

export default App;
