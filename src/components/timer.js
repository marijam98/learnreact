import React, { useState, useEffect } from 'react';

const Timer = () => {
    const initialValue = 0
    const [value, setValue] = useState(initialValue);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                setValue(value + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [value, isActive]);

    const reset = () => {
        setValue(initialValue)
        setIsActive(false)
    }
    return (
        <div className='card'>
            <h1>{value}</h1>
            <button className='btnstart' type='button' onClick={() => setIsActive(true)}>Start</button>
            <button className='btnstop' type='button' onClick={() => setIsActive(false)}>Stop</button>
            <button className='btnreset' type='button' onClick={reset}>Reset</button>
        </div>
    )
}

export default Timer