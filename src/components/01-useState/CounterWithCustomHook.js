import React from 'react';
import { useCounter } from './../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment(2)}>
                +1
            </button>
            <button
                className="btn btn-warning"
                onClick={() => decrement(1)}>
                -1
            </button>
            <button
                className="btn btn-default"
                onClick={reset}>
                Reset
            </button>
        </>
    )
}
