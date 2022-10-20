import React from "react";
import Loading from "./loading";

class ShowGif extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.isLoad ? <Loading /> :
                    <img className='gif' src={this.props.gif ||
                        'https://ausgreensolarsolutions.com.au/web/image/575/sdfjsdf.png'} alt="marija" />}
            </div>
        )
    }
}
export default ShowGif