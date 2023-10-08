import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisiblity(false) }>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisiblity(true)}>
        Test
      </Button>
    </div>
  );
}

export default App;
