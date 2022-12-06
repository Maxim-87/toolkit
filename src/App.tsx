import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, addTodo, removeLastTodo} from "./toolkit/toolkitSlice";



function App() {

    const {count, todos} = useSelector((state: any) => state.toolkitSlice)
    const dispatch = useDispatch();

    console.log(todos)

    const incrementHandler = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement())
    }

    const addTodoHandler = () => {
        dispatch(addTodo('new todo'))
    }

    const removeTodoHandler = () => {
        dispatch(removeLastTodo())
    }

    const addDispatchTodo = () => {
        setTimeout(() => {
            dispatch(addTodo('dispatch todo'));
        }, 2000)
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
            <button onClick={addDispatchTodo}>
                New todos
            </button>
            <ul>
                {todos.map((todo: any) => <li> {todo} </li>)}
            </ul>
        </div>
    );
}

export default App;
