import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "./actionType";
import {loadData, saveData} from '../../Utils/localStorage'

const token = loadData("token")
const email = loadData("email")

const initState = {
    isAuth: token ? true : false,
    isLoading: false,
    isError: false,
    token: token || "",
    email: email || ""
}

const authReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                isLoading: true    
            }
        case LOGIN_USER_SUCCESS:
            saveData("token", payload.token)
            saveData("email", payload.email)
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload.token,
                email: payload.email
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        default:
            return state
    }
}

export { authReducer}