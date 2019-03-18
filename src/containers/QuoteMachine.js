import React, { Component } from 'react';

import axios from 'axios';
import Quote from '../components/Quote';
import Button from '../components/Button';
import classes from './QuoteMachine.module.css';
import { SocialIcon } from 'react-social-icons';

class QuoteMachine extends Component {
    state = {
        quotes: null,
        currentQuote: null,
        currentAuthor: null  
    }

    componentWillMount() {
        axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(res => {
            this.setState({quotes: res.data['quotes']});
            this.randomQuoteHandler();
        })
        .catch(err => {
            console.log(err);
        })
    }

    randomQuoteHandler = () => {
        let randomIndex = Math.floor(Math.random() * this.state.quotes.length);
        this.setState({
            currentQuote: this.state.quotes[randomIndex].quote,
            currentAuthor: this.state.quotes[randomIndex].author
        });
    }
        
    tweetHandler = () => {
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.state.currentQuote + '" ' + this.state.currentAuthor));
    }

    render() { 
        return (
            <div className={classes.QuoteBox}>
                <Quote 
                    message={this.state.currentQuote}
                    author={this.state.currentAuthor} />
                <Button clicked={this.tweetHandler}>
                    <SocialIcon 
                        network="twitter" 
                        bgColor="transparent" 
                        fgColor="white"
                        style={{ width: 40, height: 40 }} />
                </Button>
                <Button clicked={this.randomQuoteHandler}>New Quote</Button>
            </div>
        );
    }
}
 
export default QuoteMachine;