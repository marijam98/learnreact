import React from "react";
import ShowGif from './show-gif';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '', //remove local state
            gif: '',
            loading: false
        }
    }
    fetchGif = (criteria) => {
        const url = `http://api.giphy.com/v1/gifs/random?api_key=rsoMA4Twgm0rV4FKx6EZP7KzBuLafqS8&tag=${criteria}`
        this.setState({ loading: true })
        fetch(url)
            .then(response => response.json())
            .then(content => {
                this.setState({
                    gif: content.data.images.downsized.url,
                })
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }
    changeKeyword = (e) => {
        this.setState({ keyword: e.target.value })
        //this.props.onKeywordChange(e.target.value)
    }
    clearKeyword = (ev) => {
        ev.preventDefault()
        this.setState({ keyword: '' })
        //this.props.onClear({this.props.text})
    }
    changeGiphy = (ev) => {
        ev.preventDefault()
        this.fetchGif(this.state.keyword)
    }

    render() {
        return (
            <div>
                <form>
                    <label className='srch'>
                        <h5 className='hdr'>search giphy.com</h5>
                        <div className='input-wrapper'>
                            <input className='input' type='text' value={this.state.keyword} //value={this.props.text}
                                onChange={this.changeKeyword} />
                            <button onClick={this.clearKeyword} className='clear'>x</button>
                        </div>
                    </label>
                    <button disabled={!this.state.keyword} //disabled={!this.props.text}
                        className='btnGif' type='submit' onClick={this.changeGiphy}>submit</button>
                </form>
                <ShowGif gif={this.state.gif} isLoad={this.state.loading} />
            </div>
        )
    }
}
export default SearchBar