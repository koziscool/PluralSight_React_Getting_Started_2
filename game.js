

var Stars = React.createClass({
  render: function() {
    return (
      <div className="col-5">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
      </div>
    );
  }
});

var Button = React.createClass({
  render: function() {
    return (
      <div className="col-2">
        <button>=</button>
      </div>
    );
  }
});

var Answer = React.createClass({
  render: function() {
    return (
      <div className="col-5">
        ...
      </div>
    );
  }
});

var Game = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
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