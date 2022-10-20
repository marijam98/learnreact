import React, { useState } from 'react';

const CounterHooks = () => {
    const initialValue = 0
    const [value, setValue] = useState(initialValue);

    const CounterChangeUp = () => {
        setValue(value + 1)
    }
    const CounterChangeDown = () => {
        setValue(value - 1)
    }

    return (
        <div className='card'>
            <button className='btn' type='button' onClick={CounterChangeUp}>+</button>
            <h1>{value}</h1>
            <button className='btn' type='button' onClick={CounterChangeDown}>-</button>
            <button className='btnreset' type='button' onClick={() => setValue(initialValue)}>Reset</button>
        </div>
    )
}

export default CounterHooks