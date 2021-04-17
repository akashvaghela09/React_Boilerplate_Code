import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "./actionType"


const loginUserRequest = () => {
    return {
        type: LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = (email, token) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: {
            email,
            token
        }
    }
}

const loginUserFailure = () => {
    return {
        type: LOGIN_USER_FAILURE
    }
}

export {
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure
}