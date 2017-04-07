

var Button = React.createClass({

  render: function() {
    return(
        <button onClick={ this.props.onClickFunction }>+1</button>
    );
  }
});

var Result = React.createClass({
  render: function() {
    return (
      <div>{ this.props.counter }</div>
    )
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },

  incrementCounter: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  render: function() {
    return (
      <div>
        <Button onClickFunction={this.incrementCounter} />
        <Result counter = {this.state.counter}/>
      </div>
    );
  }
});

ReactDOM.render( 
    <App />, 
    document.getElementById("container")
);


