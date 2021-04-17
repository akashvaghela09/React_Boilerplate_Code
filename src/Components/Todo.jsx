import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoFailure, addTodoRequest, addTodoSuccess, getTodoFailure, getTodoRequest, getTodoSuccess } from '../Redux/app/action';
import { TodoInput } from './TodoInput';
import { Redirect } from 'react-router-dom';
import {Task} from './Task'
import axios from 'axios'

const Todo =() => {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.app.isLoading)
    const isError = useSelector((state) => state.app.isError)
    const todo = useSelector((state) => state.app.todo)
    const isAuth = useSelector(state => state.auth.isAuth)

    const addTodos = (payload) => {
       
        dispatch(addTodoRequest())

        axios.post("http://localhost:3005/todo", payload)
        .then((res)=> {
            const addTodoAction = addTodoSuccess(res.data)
            dispatch(addTodoAction)
            getTodoList()
        })
        .catch((err)=> {
            const todoErr = addTodoFailure()
            dispatch(todoErr)
        })
        
        
    }
    const getTodoList = () => {
        dispatch(getTodoRequest())

        axios.get("http://localhost:3005/todo")
        .then((res)=> {
            const getTodoAction = getTodoSuccess(res.data)
            console.log(res.data);
            dispatch(getTodoAction)
        })
        .catch((err)=> {
            const todoErr = getTodoFailure()
            dispatch(todoErr)
        })
    }

    console.log(todo);

    useEffect(() => {
        getTodoList()
    }, []);
    
    if(isAuth !== true){
        return <Redirect to="/login"/>
    }

    return isLoading ? <h3>Loading</h3> : isError ? <h3>something went wrong</h3> : (
        <div>
            <h1>Todo List</h1>
            <TodoInput addTodos={addTodos} />
            {
                todo.map((el) => (
                    <Task key={el.id} data={el}/>
                ))
            }
        </div>
    )
}

export {Todo}