var React =  require('react');
var LabelButton = React.createClass({
  handleLinkClick : function(e){
   this.props.changeContents(e.target.id);
  },

  render: function(){
    return(
      <button id={this.props.labelID} className="btn btn-default" type="button" onClick={this.handleLinkClick}>
      {this.props.labelName}
      </button>
    );
  }
});
module.exports=LabelButton



/*
<button id="home" className="btn btn-default" type="button" onClick={this.handleLinkClick}>
  <em className="glyphicon glyphicon glyphicon-home"></em> Home
</button>
<button id="about" className="btn btn-default" type="button" onClick={this.handleLinkClick}>
  <em className="glyphicon  glyphicon-info-sign"></em> About Us
</button>
<button id="contact" className="btn btn-default" type="button" onClick={this.handleLinkClick}>
  <em className="glyphicon glyphicon-phone-alt"></em> Contact Us
</button>
*/
