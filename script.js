

var Button = React.createClass({

  handleClick: function() {
    this.props.onClickFunction(this.props.incrementValue);
  },

  render: function() {
    return(
        <button onClick={ this.handleClick }>
          +{this.props.incrementValue}
        </button>
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

  incrementCounter: function( incrementValue ) {
    this.setState({
      counter: this.state.counter + incrementValue
    });
  },

  render: function() {
    return (
      <div>
        <Button incrementValue = {1} onClickFunction={this.incrementCounter} />
        <Button incrementValue = {5} onClickFunction={this.incrementCounter} />
        <Button incrementValue = {10} onClickFunction={this.incrementCounter} />
        <Button incrementValue = {100} onClickFunction={this.incrementCounter} />
        <Result counter = {this.state.counter}/>
      </div>
    );
  }
});

ReactDOM.render( 
    <App />, 
    document.getElementById("container")
);


