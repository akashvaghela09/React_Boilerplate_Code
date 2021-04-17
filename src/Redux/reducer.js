import { ADD_COUNTER, ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, REDUCE_COUNTER } from './actionType'

const initialState = {
    counter: 0,
    isLoading: false,
    todo: [],
    isError: false
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + payload
            }
        case REDUCE_COUNTER:
            return {
                ...state,
                counter: state.counter - payload
            }
        case ADD_TODO_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                todo: [ ...state, payload]
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_TODO_SUCCESS:
            return {
                isLoading: false,
                todo: payload
            }
        case GET_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export {reducer}