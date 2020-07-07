import React from 'react';


const ToDo = (props) => {
  
  console.log(props)
  const completed = props.entry.completed ? "line-through black" : "none";
  return (
    <div>
      <span style={{textDecoration: completed}} onClick={() => props.toggle(props.entry.id)}>{props.entry.toDo}</span>
    </div>
  );

};

export default ToDo;
