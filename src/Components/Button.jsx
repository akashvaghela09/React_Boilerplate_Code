import React, { useContext } from 'react';
import { ReduxContext } from '../Context/ReduxProvider';
import { addCounter, reduceCounter } from '../Redux/action';

const Button = () => {
    const { dispatch } = useContext(ReduxContext)

    const handleIncreament = () => {
        const addAction = addCounter(1);
        dispatch(addAction)
    }

    const handleDecreament = () => {
        const reduceAction = reduceCounter(1)
        dispatch(reduceAction)
    }
    return (
        <div>
            <div>
                <button onClick={handleIncreament}>Increament</button>
            </div>
            <div>
                <button onClick={handleDecreament}>Decreament</button>
            </div>
        </div>
    )
}

export {Button}