

var Stars = React.createClass({


  render: function() {
    
    const numberOfStars = 1+ Math.floor( Math.random() * 9 );
    let stars = [];
    for (let i = 0; i< numberOfStars; i++) {
      stars.push(<i key={i} className="fa fa-star"></i> )
    }
    return (
      <div className="col-5">
        {stars}
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
        <div>
        ...
        </div>
      </div>
    );
  }
});

var Numbers = React.createClass({
  render: function() {
    return (
      <div className="card text-center">
        <div>
          {Numbers.list.map((number) => 
            <span key={number}>{number}</span>)}
        </div>
      </div>
    );
  }
});

Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        <br />
        <Numbers />
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