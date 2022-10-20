import React from "react";

class Random extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            diceOne: 0,
            diceTwo: 0
        }
    }
    min = 1;
    max = 6;
    randomNumber = () => {
        this.setState({
            diceOne: Math.floor(Math.random() * this.max + this.min),
            diceTwo: Math.floor(Math.random() * this.max + this.min)
        }
        )
    }
    render() {
        return (
            <div className='card'>
                <button className='btn' type='button' onClick={this.randomNumber}>Click</button>
                <h1>{this.state.diceOne}</h1>
                <h1>{this.state.diceTwo}</h1>
            </div>
        )
    }
}

export default Random