import React from "react"

class Beginner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: 'https://picsum.photos/200',
            text: 'I hope you enjoy learining React!',
            name: 'Marija',
        }
    }
    changeName = () => {
        this.setState({ name: this.state.name === 'Marija' ? 'Milena' : 'Marija' })
    }
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <img src={this.state.imageUrl} alt="" />
                <h2>{this.state.text}</h2>
                <h3>{this.state.name}</h3>
                <h4>Today date is {new Date().toLocaleDateString()}</h4>
                <button type="button" style={{ backgroundColor: 'pink' }} onClick={this.changeName}>Click</button>
            </div>
        );
    }
}

export default Beginner