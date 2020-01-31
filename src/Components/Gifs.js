import React, { Component } from "react";
import axios from "axios";


export class Gifs extends Component {
  state = {
    gifs: [],
    gif_url: ""
  };

  componentDidMount() {
  this.getGifs()
  
  }

  getGifs = () => {
    axios.get("/api/getGifs").then(res => {
      this.setState({
        gifs: res.data
      });
    });
    this.deleteDupes()
  }

  deleteDupes = () => {
    axios.delete('/api/noDupes').then(res => {
      
    })
  }

  
  getMoreGifs = () => {
    axios.post("/api/storeData").then(res => {
      this.deleteDupes()
    });

    this.getGifs()
  }

  render() {
    const { gifs } = this.state;
    console.log(gifs)

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
        <button onClick={this.getMoreGifs}> Get More Gifs</button>
      </div>
    );
  }
}

export default Gifs;
