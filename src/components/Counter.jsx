import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { addCounter, reduceCounter } from "../Redux/app/action";

const Counter = () => {
    const dispatch = useDispatch();
    const {
        counter
    } = useSelector(state => state.app)

    const handleAdd = () => {
        dispatch(addCounter(1))
    }

    const handleReduce = () => {
        dispatch(reduceCounter(1))
    }

    return (
        <div className='bg-slate-200 drop-shadow-md rounded-md'>
            <p className='text-5xl m-10 text-center'>
            {counter}
            </p>
            <div className='flex justify-evenly'>
                <button className='p-8' onClick={() => handleAdd()}>
                    <GrAdd className='text-2xl font-bold'/>
                </button>
                <button className='p-8' onClick={() => handleReduce()}>
                    <GrSubtract className='text-2xl font-bold'/>
                </button>
            </div>
        </div>
    )
}

export { Counter }