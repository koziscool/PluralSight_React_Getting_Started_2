

var Button = React.createClass({
  render: function() {
    return(
        <button>{this.props.aprop}</button>
    );
  }
});

ReactDOM.render( 
    <Button aprop="koz"/>, 
    document.getElementById("container")
);


