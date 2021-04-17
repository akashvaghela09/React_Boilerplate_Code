import React, { useContext } from 'react';
import { ReduxContext } from '../Context/ReduxProvider';

const Counter = () => {
    const { getState } = useContext(ReduxContext)
    const { counter } = getState()

    return (
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
        </>
    )
}

export {Counter}