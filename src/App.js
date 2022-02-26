import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const[inputList,setInputList]=useState("");
  const[items,setItems]=useState([]);
  const itemEvent = (event) =>{
       setInputList(event.target.value);
  }
  const onSubmit = () =>{
      setItems((oldItems) =>{
        return [...oldItems,inputList];
      })
      setInputList("");
  }
  const deleteItems = (id) =>{
    setItems((oldItems) =>{
      return oldItems.filter((arrElem,index) =>{
        return index !== id;
      })
    })
         
  }
  return (
    <>
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>ToDo App</h1>
        <br />
        <input type="text" placeholder='Add a item' onChange={itemEvent} value={inputList} />
        <button onClick={onSubmit}> + </button>
        <ol>
          {
              items.map((itemval,index) =>{
                return <ToDoList key={index}
                         id={index}
                        text={itemval}
                        fun={deleteItems} />
              })
          }
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
