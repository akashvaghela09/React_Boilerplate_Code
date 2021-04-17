import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUserFailure, loginUserRequest, loginUserSuccess } from '../Redux/auth/action';
import styles from './Components.module.css'

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isAuth = useSelector(state => state.auth.isAuth)
    const isError = useSelector(state => state.auth.isError)
    const isLoading = useSelector(state => state.auth.isLoading)

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            email,
            password
        }

        dispatch(loginUserRequest())

        
        axios.post("https://reqres.in/api/login", payload)
        .then((res) => {
            dispatch(loginUserSuccess(email, res.data.token))
        })
        .catch((err)=> {
            dispatch(loginUserFailure())
        })
    }

    if(isAuth === true){
        return <Redirect to="/"/>
    }

    return isLoading ? <h1>... wait it's Loading</h1> : isError ? <h1>Something went wrong</h1> : (
        <div className={styles.loginForm} >
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input className={styles.loginInput} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email ..." name="email"/><br />
                <label>Password</label><br />
                <input className={styles.loginInput} value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Enter password ..." name="password"/> <br />
                <button className={styles.loginBtn} type="SUBMIT">Login</button>
            </form>
        </div>
    )
}

export { LoginForm }