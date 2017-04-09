

var Stars = React.createClass({

  render: function() {
    let stars = [];
    for (let i = 0; i< this.props.numberOfStars; i++) {
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
        { this.props.selectedNumbers.map( (number) => 
          <span key={number} onClick={() => this.props.unselectNumber(number) }>
            {number}
          </span>) }
      </div>
    );
  }
});

var Numbers = React.createClass({
  numberClassName: function(number) {
    if (this.props.selectedNumbers.indexOf(number) >= 0)
      return 'selected';
  },

  render: function() {
    return (
      <div className="card text-center">
        <div>
          {Numbers.list.map((number) => 
            <span key={number} className={this.numberClassName(number) }
                                              onClick={ () => this.props.selectNumber(number)}>
              {number}
            </span>)}
        </div>
      </div>
    );
  }
});

Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var Game = React.createClass({
  getInitialState:function(){
    return {
      selectedNumbers: [],
      numberOfStars: 1 + Math.floor( Math.random() * 9 ) 
    }
  },

  selectNumber: function( clickedNumber ) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 ) { return; }
    this.setState({
      selectedNumbers: this.state.selectedNumbers.concat(clickedNumber)
    })
  },

  unselectNumber: function( clickedNumber ) {
    this.setState({
      selectedNumbers: this.state.selectedNumbers.filter( (number) => number !== clickedNumber )
    })
  },

  render: function() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <div className="row">
          <Stars numberOfStars={this.state.numberOfStars}/>
          <Button />
          <Answer selectedNumbers={ this.state.selectedNumbers }
                          unselectNumber={this.unselectNumber} />
        </div>
        <br />
        <Numbers selectedNumbers={ this.state.selectedNumbers }
                          selectNumber={this.selectNumber} />
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


