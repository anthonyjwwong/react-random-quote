import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';

import Quote from './Quote';
import ToggleTweet from './ToggleTweet';
import ToggleQuote from './ToggleQuote';
import proxy from '../config';


class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      quotes: "",
      author: ""
    }

    this.handleGetQuotes = this.handleGetQuotes.bind(this);
    this.handleTweetOut = this.handleTweetOut.bind(this);
  }

  handleTweetOut() {
    console.log(this.state.quotes, this.state.author);
    window.open("https://twitter.com/intent/tweet?text=" + this.state.quotes + " " + "-" + this.state.author);
  }

  handleGetQuotes() {
     axios.get(`${proxy}https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`)
    .then(response => this.setState({
        quotes: response.data.quoteText, 
        author: response.data.quoteAuthor
    }))
    .catch(e => {
      console.log(e);
    });  
  }
  
  componentDidMount() {
    this.handleGetQuotes();
  }

  render() {
    return (
      <div className="container">
      
        <Quote 
          quote={this.state.quotes}
           author={this.state.author} />

        <div className="button_container">
          <ToggleQuote onclick={this.handleGetQuotes} />
          <ToggleTweet onclick={this.handleTweetOut} />


        </div>
      </div>
    )
  }
}

export default App;
