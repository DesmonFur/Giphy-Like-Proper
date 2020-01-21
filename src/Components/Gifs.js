import React, { Component } from "react";
import axios from "axios";

export class Gifs extends Component {
  state = {
    gifs: [],
    gif_url: ""
  };

  componentDidMount() {
    axios.get("/api/getGifs").then(res => {
      console.log(res);
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    console.log(this.state.gifs);
    console.log(this.state.gif_url);
    const { gifs } = this.state;

    const giphys = gifs.map(gif => {
      return (
        <div className="gif-container" key={gif.gif_id}>
          <h1 className="gif-title">{gif.gif_title}</h1>
          <img src={gif.gif_url} className="gifs" alt="gifs" />
        </div>
      );
    });

    return (
      <div className="space">
        <h1 className="Title"> Giphy Like</h1>
        {giphys}
      </div>
    );
  }
}

export default Gifs;
