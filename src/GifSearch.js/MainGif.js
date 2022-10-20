import React from "react";
import ShowGif from "./show-gifs";
import SearchBar from "./searchBar";
import './gif.css';

class Gif extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {

    return <div>
      <SearchBar
      />
      <ShowGif />
    </div>
  }
}
export default Gif