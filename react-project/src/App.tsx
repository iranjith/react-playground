import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import ProductList from "./components/ProductList";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  //effect hook used to call server
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        //console.log(res.data[0].id);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p> }
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} </li>
        ))}
      </ul>
    </>
  );
}

export default App;
