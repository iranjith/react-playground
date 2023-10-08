import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Fransisco", "London", "Tokyo", "Paris"];


  const getMessage = () => {
    return items.length === 0 && <p>No items found</p>;
  }

  //Event Handler
  const handleClick = (event: MouseEvent) =>{
    console.log(event)
  }

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={ handleClick }>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
