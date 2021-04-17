import { ADD_COUNTER, ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, REDUCE_COUNTER, GET_TODO_REQUEST, GET_TODO_SUCCESS, GET_TODO_FAILURE } from './actionType'

const addCounter = (payload) => {
    return {
        type: ADD_COUNTER,
        payload
    }
}

const reduceCounter = (payload) => {
    return {
        type: REDUCE_COUNTER,
        payload
    }
}

const addTodoRequest = () => {
    return {
        type: ADD_TODO_REQUEST        
    }
}

const addTodoSuccess = (payload) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload
    }
}

const addTodoFailure = () => {
    return {
        type: ADD_TODO_FAILURE        
    }
}

const getTodoRequest = () => {
    return {
        type: GET_TODO_REQUEST     
    }
}

const getTodoSuccess = (payload) => {
    return {
        type: GET_TODO_SUCCESS,
        payload
    }
}

const getTodoFailure = () => {
    return {
        type: GET_TODO_FAILURE        
    }
}
export { addCounter, 
        reduceCounter, 
        addTodoRequest, 
        addTodoSuccess, 
        addTodoFailure,
        getTodoRequest,
        getTodoSuccess,
        getTodoFailure
}