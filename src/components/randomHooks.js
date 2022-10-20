import React, { useState } from "react"

const RandomHooks = () => {
    const [valueOne, setValueOne] = useState(0)
    const [valueTwo, setValueTwo] = useState(0)

    const onClickRandom = () => {
        setValueOne(Math.floor(Math.random() * 6 + 1));
        setValueTwo(Math.floor(Math.random() * 6 + 1))
    }

    return (
        <div className='card'>
            <h1>{valueOne}</h1>
            <h1>{valueTwo}</h1>
            <button className='btn' type='button' onClick={onClickRandom}>Click</button>
        </div>
    )
}
export default RandomHooks