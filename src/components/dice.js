import React from "react"

class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedValue: 1,
        }
    }

    handleChange = (value) => {
        this.setState({ selectedValue: value })
    }

    render() {
        const { selectedValue } = this.state;

        return [1, 2, 3, 4, 5, 6].map(val => <div>
            <button key={val} style={{ backgroundColor: val === selectedValue ? 'pink' : '' }}
                type="submit" onClick={() => this.handleChange(val)}>{val}</button>
        </div>)
    }
}

export default Dice
