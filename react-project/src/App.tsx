import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransisco", "London", "Tokyo", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
