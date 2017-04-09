

var Stars = React.createClass({
  render: function() {
    return (
      <div>
        ...
      </div>
    );
  }
});

var Button = React.createClass({
  render: function() {
    return (
      <div>
        ...
      </div>
    );
  }
});

var Answer = React.createClass({
  render: function() {
    return (
      <div>
        ...
      </div>
    );
  }
});

var Game = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Play Nine</h3>
        <Stars />
        <Button />
        <Answer />
      </div>
    );
  }
})


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Game />
      </div>
    );
  }
})

ReactDOM.render( <App />, document.getElementById("container"));