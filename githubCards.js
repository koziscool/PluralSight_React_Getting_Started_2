

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
        { this.props.cards.map( card => <Card {...card} />)}
      </div>
    )
  }
});

var Form = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    )
  }
});

var App = React.createClass({
   getInitialState: function() {
    return {
        cards: [
        { name:"Paul O'Shannessy",
          avatar_url: "https://avatars2.githubusercontent.com/u/8445?v=3",
          company: "Facebook" },
        { name:"Ben Alpert",
          avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=3",
          company: "Facebook" }
      ],
    }
  },
  render: function() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.cards}/>
      </div>
    )
  }
});

ReactDOM.render( <App />, document.getElementById("container"));
