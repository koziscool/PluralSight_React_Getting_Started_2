

var Card = React.createClass({
  render: function(){
    return (
      <div style={{ margin: '1em' }}>
        <img width = "75" src={this.props.avatar_url}/>
        <div style = {{ display: 'inline-block', marginLeft: 10 }}>
          <div style = {{ fontSize: '1.25em', fontWeight: 'bold' }}> {this.props.name} </div>
          <div>  {this.props.company} </div>
        </div>
      </div>
    );
  }
});



var CardList = React.createClass({
  render: function() {
    return (
      <div>
        { this.props.cards.map( card => <Card key = {card.id} {...card} />)}
      </div>
    )
  }
});

var Form = React.createClass({
   getInitialState: function() {
    return { userName: '' }
  },

  handleSubmit: function( event ){
    event.preventDefault();
    var formComponent = this;
    $.get( "https://api.github.com/users/" + this.state.userName, function(data){
      formComponent.props.onSubmit( data );
      formComponent.setState({ userName: '' });
    } );
  },

  render: function() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" 
          value = {this.state.userName}
          onChange={ (event) => this.setState( {userName: event.target.value } ) }
          placeholder="Github username" required/>
        <button type="submit">Add card</button>
      </form>
    );
  }
});

var App = React.createClass({
   getInitialState: function() {
    return {
        cards: [  ]
    }
  },

  addNewCard: function(cardInfo) {
    this.setState({
      cards: this.state.cards.concat(cardInfo)
    });
  },

  render: function() {
    return (
      <div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    )
  }
});

ReactDOM.render( <App />, document.getElementById("container"));
