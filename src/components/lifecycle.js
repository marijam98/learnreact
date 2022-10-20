import React from "react";
import Loading from "../GifSearch.js/loading";

class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            gif: '',
            button: false
        }
    }
    componentDidMount() {
        console.log('component did mount')
        this.fetchGif(this.state.keyword)
    }
    componentDidUpdate() {
        console.log('component did update')
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

    changeKeyword = (event) => {
        this.setState({ keyword: event.target.value })
    }
    clearKeyword = (ev) => {
        ev.preventDefault()
        this.setState({ keyword: '' })
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
                            <input className='input' type='text' value={this.state.keyword} onChange={this.changeKeyword} />
                            <button onClick={this.state.keyword} className='clear'>x</button>
                        </div>
                    </label>
                    <button disabled={!this.state.keyword} className='btnGif' type='submit' onClick={this.changeGiphy}>submit</button>
                </form>
                {this.state.load ? <Loading /> :
                    <img className='gif' src={this.state.gif ||
                        'https://www.capernaum.rs/wp-content/themes/consultix/images/no-image-found-360x260.png'} alt="marija" />}
            </div>

        )
    }
}
export default Lifecycle