import React, {useState} from "react";

function Task({text, category}) {

  const [deleted, setDeleted] = useState(false);

  function handleDelete(){
    setDeleted(true)
  }
  return (deleted ?
    null:
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
