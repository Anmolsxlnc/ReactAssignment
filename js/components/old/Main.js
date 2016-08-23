var React =  require('react');
var ReactDom = require('react-dom');
var AnotherComponent  = require('./components/anotherComponent');
var StateComponent  = require('./components/stateComponent');   // mandatory to include all the component js here
var MainComponent = React.createClass({
  handleClick : function(){
    this.setState({dataColorS:"red"})
    document.getElementById('para').style.color = "red";
  },
  changeAuthorMain : function(){
    this.setState({author:"Ankit"})
  }
  ,render: function(){
    return(
      <div>
        <h1>Hello From Anmol !</h1>
        <input type="button" value="click to change Color of child component" onClick={this.handleClick} />
        <br />

        <AnotherComponent author={this.state.author} />
        <br/>

        <StateComponent dataColor={this.state.dataColorS} changeAuthor={this.changeAuthorMain} />
      </div>
    ); //this statement creates a child relationship
  },
  getInitialState: function(){
    return (
      {dataColorS:"black", author:"Anmol"}
    )
  }
});
ReactDom.render(<MainComponent/>, document.getElementById('app'));


// comment inside jsx :     {/*     */}
