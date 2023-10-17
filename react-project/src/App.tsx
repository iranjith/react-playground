import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
    return (
    <div>
      <ExpandableText maxChars={50}>
        Lorem ipsum dolo sit amet consectetur, adipisicing elit. Minima consequuntur repudiandae repellat maxime earum asperiores beatae, quibusdam molestiae incidunt veniam quisquam ut quo, nulla deleniti? Pariatur accusantium quia tempore quis qui. Adipisci quibusdam deserunt totam doloribus, cum suscipit porro itaque quod rem possimus quam non corporis tempora. Natus quasi, placeat necessitatibus, id obcaecati eius temporibus ipsum dolor dolorem itaque error similique, porro ad nulla doloremque ab dolores inventore fugiat eos illo neque delectus doloribus culpa. Fuga neque fugit similique vel voluptatibus quia inventore, optio ipsum quo temporibus, molestiae veritatis veniam possimus nihil consequatur atque eaque voluptatum necessitatibus cupiditate deserunt nemo.
      </ExpandableText>
    </div>
  );
}

export default App;
