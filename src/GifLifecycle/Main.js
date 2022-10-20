import React from "react";
import SearchBar from "./searchBar";
import './gif.css';
import Show from "./show";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      gif: '',
      sticker: '',
    }
  }
  handleKeyWordChange = (item) => {
    this.setState({ keyword: item })
  }
  changeGif = () => {
    this.fetchGif(this.state.keyword)
  }
  fetchGif = (criteria) => {
    const url = `http://api.giphy.com/v1/gifs/random?api_key=rsoMA4Twgm0rV4FKx6EZP7KzBuLafqS8&tag=${criteria}`
    fetch(url)
      .then(response => response.json())
      .then(content => {
        this.setState({ gif: content.data.images.downsized.url })
      })
      .catch(err => console.error(err))

    const str = `http://api.giphy.com/v1/stickers/random?api_key=rsoMA4Twgm0rV4FKx6EZP7KzBuLafqS8&tag=${criteria}`
    fetch(str)
      .then(response => response.json())
      .then(content => {
        this.setState({ sticker: content.data.images.downsized.url })
      })
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div>
        <SearchBar
          text={this.state.keyword}
          onKeywordChange={this.handleKeyWordChange}
          onChangeGif={this.changeGif}
        />
        <div className="showgif">
          <Show
            text={this.state.keyword}
            name='gif'
            pic={this.state.gif}
          />
          <Show
            text={this.state.keyword}
            pic={this.state.sticker}
            name='sticker'
          />
        </div>
      </div>
    )
  }
}
export default Main