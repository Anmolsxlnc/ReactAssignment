var React =  require('react');
var LabelButton  = require('./labelButton');
var SideBarComponent = React.createClass({
  render: function(){
    var f=this.props.changeContent;
    //console.log("Creating side bar");
    var labelButtons = this.props.labels.map(
      function(l){
        return (
        < LabelButton labelID={l.id} changeContents={f} labelName={l.name} />
        )
      }
    );

    return(
      <div className="col-md-2">
  			<div className="btn-group btn-group-vertical btn-group-sm">
  				{labelButtons}
  			</div>
  		</div>
    );
  }
});
module.exports=SideBarComponent



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
