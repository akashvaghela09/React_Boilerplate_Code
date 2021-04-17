import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { LoginForm } from '../Components/LoginForm';
import { Home } from './Home';
import styles from '../Components/Components.module.css'

const Allroutes = () => {
    return (
        <div>
            <div   className={styles.navbar}>
                <Link  className={styles.navLink} to="/">Home Page</Link>
                <Link  className={styles.navLink} to="/login">Login Page</Link>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <LoginForm />
                </Route>
            </Switch>
        </div>
    )
}

export { Allroutes }