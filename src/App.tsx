import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, decrement, increment, removeLastTodo} from "./redux/mainReducer";

function App() {

    const {count, todos} = useSelector((state: any) => state.main)
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement())
    }

   const addTodoHandler = () => {
        dispatch(addTodo())
    }

   const removeTodoHandler = () => {
        dispatch(removeLastTodo())
    }


  return (
    <div className="App">
        <div>
            {count}
        </div>
     <button onClick={incrementHandler}>
         Increment
     </button>
        <button onClick={decrementHandler}>
         Decrement
     </button>
        <button onClick={addTodoHandler}>
         Add todos
     </button>
        <button onClick={removeTodoHandler}>
         Delete todos
     </button>
        <ul>
            {todos.map((todo: any) => <li key={todo}> todo </li>)}
        </ul>
    </div>
  );
}

export default App;
