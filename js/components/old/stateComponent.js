var React =  require('react');
//var ReactDom = require('react-dom');
var StateComponent = React.createClass({



  render: function(){
  /*  if( this.props.dataColor === "true")
    var d ="  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    else
    var d ="";
*/
    return(
      <div id="para">
      <h2>  Hello {this.props.dataColor},</h2>
        <input type="button" value="click to change state of parent author" onClick={this.props.changeAuthor} />
      <p >

         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
    );
  }
});
module.exports=StateComponent                     //to create a parent child relationship between components
//ReactDom.render(<AnotherComponent/>, document.getElementById('paraContent'));    // use this to render separately
