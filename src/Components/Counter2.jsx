import React from 'react';
// import React, { useContext } from 'react';
// import { ReduxContext } from '../Context/ReduxProvider';
import { addCounter, reduceCounter } from '../Redux/action';
import {useDispatch, useSelector} from 'react-redux'
const Counter2 = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter)

    const handleIncreament = () => {
        dispatch(addCounter(1));
    }

    const handleDecreament = () => {
        dispatch(reduceCounter(1))
    }
    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={handleIncreament}>Increament</button>
            </div>
            <div>
                <button onClick={handleDecreament}>Decreament</button>
            </div>
        </div>
    )
}

export {Counter2}