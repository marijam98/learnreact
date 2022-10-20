import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    changeGiphy = (ev) => {
        ev.preventDefault()
        this.props.onChangeGif()
    }

    render() {
        return (
            <div>
                <button className='btnGif' type='submit' onClick={this.changeGiphy}>submit</button>
            </div>
        )
    }
}
export default Button