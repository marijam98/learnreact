import React from "react";

class Show extends React.Component {

    render() {
        return (
            <div className="show">
                <h6>This is {this.props.name}</h6>
                <img className='gif' src={this.props.pic ||
                    'https://ausgreensolarsolutions.com.au/web/image/575/sdfjsdf.png'} alt="marija" />
            </div>
        )
    }
}
export default Show