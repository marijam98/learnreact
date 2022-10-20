import React from 'react';

class Counter extends React.Component {
    initialState = { value: 0 }
    constructor(props) {
        super(props)
        this.state = this.initialState;
    }
    changeValueUp = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1,
        }))
    }
    changeValueDown = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1,
        }))
    }
    resetValue = () => {
        this.setState(this.initialState)
    }
    render() {
        return (
            <div>
                <div className='card'>
                    <button className='btn' type='button' onClick={this.changeValueUp}>+</button>
                    <h1>{this.state.value}</h1>
                    <button className='btn' type='button' onClick={this.changeValueDown}>-</button>
                    <button className='btnreset' type='button' onClick={this.resetValue}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Counter;