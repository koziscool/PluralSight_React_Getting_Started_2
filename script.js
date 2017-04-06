

const Button = React.createClass({
  render: function() {
    return(
        <button>Go</button>
    );
  }
});

ReactDOM.render( 
    <Button/>, 
    document.getElementById("container")
);

