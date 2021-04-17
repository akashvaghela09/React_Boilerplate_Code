import React, { useState } from 'react';
import styles from './Components.module.css'
// import { useDispatch } from 'react-redux'
// import { v4 as uuid } from 'uuid'
// import { addTodoSuccess } from '../Redux/app/action';
// import {  } from 
const TodoInput = ({addTodos}) => {
    const [title, setTitle] = useState("");
    // const dispatch = useDispatch();

    // const handleInput = () => {
    //     const addTodoAction = addTodoSuccess(title)
    //     dispatch(addTodoAction)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            task: title,
            status: false
        }
        addTodos(payload)

    }
    return(
        <div>
            <form className={styles.inputForm} onSubmit={handleSubmit}>
                <input className={styles.todoInput} onChange={(e) => setTitle(e.target.value)} placeholder="add new Task" value={title}></input>
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}

export {TodoInput}