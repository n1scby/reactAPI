import React, { Component } from 'react';
import './App.css';
import './components/components.css';
import SearchBox from './components/search-box';
import GifSection from './components/gif-section';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      img: "",
      alt: ""
    }
  }

   change = (e) =>{
      this.setState({
        search: e.target.value
      })
    }


   submit = (e) => {
      this.setState({
        img: "",
        alt: ""
      })

      e.preventDefault();
      
      let url = 'http://api.giphy.com/v1/gifs/translate?s=' + this.state.search + '&api_key=z7zvwGpcF6HMSSSoCOf7MUftXKryEhQi';
      fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          search: "",
          img: json.data.images.downsized_medium.url,
          alt: json.data.title
        })
        console.log(json);
      })
      .catch(err => {
        console.log(err);
      });
     
    }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Get Giphy With It</h1>
        </header>
        <div>
          <SearchBox search={this.state.search} change={this.change} submit={this.submit}/>
          <GifSection img={this.state.img} alt={this.state.alt}/>
        </div>
      </div>
    );
  }
}

export default App;
