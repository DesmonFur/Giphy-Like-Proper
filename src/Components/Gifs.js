import React, { Component } from "react";
import axios from "axios";

export class Gifs extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    axios
      .get(
        "/api/storeData"
      )
      .then(res => {
          console.log(res)
        this.setState({
          gifs: res.data.data
        });
      });
      
  }

  render() {
    console.log(this.state.gifs);
    const { gifs } = this.state;

  const giphys =  gifs.map(gif => {
      return (
        <div key={gif.id}>
       <h1>{gif.title}</h1>
       <h1>{gif.url}</h1>
        <img src={gif.url} alt='gifs' />
        </div>
      );
    });

    return <div>
        {giphys}
    </div>;
  }
}

export default Gifs;
