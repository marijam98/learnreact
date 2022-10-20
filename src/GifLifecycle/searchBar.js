import React from "react";

class SearchBar extends React.Component {

    changeKeyword = (e) => {
        this.props.onKeywordChange(e.target.value)
    }
    changeGiphy = (ev) => {
        ev.preventDefault()
        this.props.onChangeGif()
    }

    render() {
        return (
            <div className="all">
                <h5 className='hdr'>search giphy.com</h5>
                <form className="in-line-form">
                    <label>
                        <input className='input' type='text' value={this.props.text}
                            onChange={this.changeKeyword} />
                        <button className='btnGif' type='submit' onClick={this.changeGiphy}>submit</button>
                    </label>
                </form>
            </div>
        )
    }
}
export default SearchBar