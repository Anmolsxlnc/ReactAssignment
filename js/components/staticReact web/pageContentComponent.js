var React =  require('react');
//var ReactDom = require('react-dom');
var PageContentComponent = React.createClass({
  render: function(){
    var p="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return(
      <div className="col-md-10">
        <div className="jumbotron">
          <h2>
            {this.props.pageContentStatus}
          </h2>
          <p>
            {p}
          </p>
        </div>
      </div>
    );
  }
});
module.exports=PageContentComponent
