import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 id="text">
          <i class="fa fa-quote-left" /> {this.props.quote}
        </h1>
        <h2 id="author">{this.props.author}</h2>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [
        {
          quote:
            "The best way to find out if you can trust somebody is to trust them.",
          author: "Ernest Hemingway"
        },
        {
          quote: "The only way to do great work is to love what you do.",
          author: "Steve Jobs"
        },
        {
          quote:
            "The most important thing is to enjoy your life - to be happy - it's all that matters.",
          author: "Steve Jobs"
        },
        {
          quote:
            "Your time is limited, don't waste it living someone else's life.",
          author: "Steve Jobs"
        },
        {
          quote:
            "The best way to find out what you want in life is to try a lot of things.",
          author: "Oprah Winfrey"
        },
        {
          quote:
            "If you want to live a happy life, tie it to a goal, not to people or things.",
          author: "Albert Einstein"
        }
      ],
      id: 0,
      quote: "Sample Text",
      author: "Sample Text"
    };
  }
  componentDidMount() {
    this.generateNewQuote();
  }
  generateNewQuote() {
    this.setState({
      id: Math.floor(Math.random() * this.state.quoteList.length)
    });
    this.setState({ quote: this.state.quoteList[this.state.id].quote });
    this.setState({ author: this.state.quoteList[this.state.id].author });
    console.log(
      this.state.id +
        " " +
        Math.floor(Math.random() * this.state.quoteList.length)
    );
  }
  render() {
    return (
      <div id="quote-box" class="text-center">
        <Quote quote={this.state.quote} author={this.state.author} />
        <button
          id="new-quote"
          class="btn btn-primary"
          onClick={this.generateNewQuote.bind(this)}
        >
          <i class="fa-solid fa-plus"></i> New quote
        </button>
        <a
          id="tweet-quote"
          class="btn btn-outline-primary"
          href="https://twitter.com/intent/tweet"
        >
          <i class="fa-brands fa-twitter"></i> Tweet Code
        </a>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("quote"));
