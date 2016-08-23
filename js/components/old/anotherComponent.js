var React =  require('react');
//var ReactDom = require('react-dom');
var AnotherComponent = React.createClass({
  render: function(){
    return(
      <div>
      <h2>  Hello {this.props.author},</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
    );
  }
});
module.exports=AnotherComponent                     //to create a parent child relationship between components
//ReactDom.render(<AnotherComponent/>, document.getElementById('paraContent'));    // use this to render separately
