

var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};



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
    let button;
    switch(this.props.answerIsCorrect) {
      case true:
        button =
        <button className="btn btn-success" onClick={this.props.acceptAnswer}>
          <i className="fa fa-check"></i>
        </button>
        break;
      case false:
        button =
        <button className="btn btn-danger">
          <i className="fa fa-times"></i>
        </button>
        break;
      default:
        button =
        <button className="btn" 
                      onClick={this.props.checkAnswer}
                      disabled={ this.props.selectedNumbers.length === 0}>
          =
        </button>;
        break;
    }
    return (
      <div className="col-2 text-center">
        {button}
        <br /><br />
        <button className="btn btn-warning btn-sm" 
                      onClick={this.props.redraw}
                      disabled={ this.props.redraws === 0}>
          <i className="fa fa-refresh"></i> {this.props.redraws}
        </button>
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
    if (this.props.usedNumbers.indexOf(number) >= 0) { return 'used'; }
    if (this.props.selectedNumbers.indexOf(number) >= 0) { return 'selected'; }
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

var DoneFrame = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <h2>{this.props.doneStatus}</h2>
        <button className="btn btn-secondary" onClick={this.props.resetGame}>
          Play Again
        </button>
      </div>
    );
  }
});

var Game = React.createClass({
  
  randomNumber: function() { return 1 + Math.floor( Math.random() * 9 ); },

  getInitialState:function(){
    return {
      selectedNumbers: [],
      usedNumbers: [],
      numberOfStars: this.randomNumber(),
      answerIsCorrect: null,
      redraws: 5,
      doneStatus: ''
    }
  },

  resetGame: function() {
    this.replaceState( this.getInitialState() )
  },

  selectNumber: function( clickedNumber ) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 ) { return; }
    this.setState({
      selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
      answerIsCorrect: null
    });
  },

  unselectNumber: function( clickedNumber ) {
    this.setState({
      selectedNumbers: this.state.selectedNumbers.filter( (number) => number !== clickedNumber ),
      answerIsCorrect: null
    });
  },

  checkAnswer: function(  ) {
    this.setState({
      answerIsCorrect: this.state.selectedNumbers.reduce( (sum, n) => sum + n, 0 ) === this.state.numberOfStars
    });
  },

  acceptAnswer: function(  ) {
    this.setState({
      usedNumbers: this.state.usedNumbers.concat(this.state.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfStars: this.randomNumber()
    }, function() {
      this.updateDoneStatus();
    });
  },

  redraw: function(  ) {
    if (this.state.redraws === 0) { return; }
    this.setState({
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfStars: this.randomNumber(),
      redraws: this.state.redraws - 1
    }, function() {
      this.updateDoneStatus();
    });
  },

  possibleSolutions: function() {
    var possibleNumbers = []
    for (var i = 1; i <= 9; i++) {
      if (this.state.usedNumbers.indexOf(i) < 0) { possibleNumbers.push(i); }
    }
    return possibleCombinationSum( possibleNumbers, this.state.numberOfStars)
  },

  updateDoneStatus: function() {
    var doneStatus = this.state.doneStatus;
    if( this.state.usedNumbers.length === 9 ) { doneStatus = "You win, Well Done!"}
    if( this.state.redraws === 0 && !this.possibleSolutions() ) { doneStatus = "Sorry, Game Over."}

    this.setState({
      doneStatus: doneStatus
    });    
  },

  render: function() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <div className="row">
          <Stars numberOfStars={this.state.numberOfStars}/>
          <Button selectedNumbers={ this.state.selectedNumbers }
                        checkAnswer={this.checkAnswer} 
                        acceptAnswer={this.acceptAnswer} 
                        redraws={this.state.redraws} 
                        redraw={this.redraw} 
                        answerIsCorrect={this.state.answerIsCorrect} />
          <Answer selectedNumbers={ this.state.selectedNumbers }
                          unselectNumber={this.unselectNumber} />
        </div>
        <br />
        { this.state.doneStatus ?
          <DoneFrame doneStatus={this.state.doneStatus}
                                resetGame={this.resetGame}/> :
          <Numbers selectedNumbers={ this.state.selectedNumbers }
                            selectNumber={this.selectNumber} 
                            usedNumbers= {this.state.usedNumbers} />
        }
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


