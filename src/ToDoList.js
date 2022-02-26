import React from "react";
import './ToDoList.css';
function ToDoList(props){
    console.log(props.id);
    return(
        <div className="ToDoStyle">
        <button onClick={() => {
            props.fun(props.id);
        }}>x</button>
        <li>{props.text}</li>
        <br />
        </div>
    )
}
export default ToDoList;