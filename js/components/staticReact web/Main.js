var React =  require('react');
var ReactDom = require('react-dom');
var SideBarComponent  = require('./components/sideBarComponent');
var PageContentComponent  = require('./components/pageContentComponent');
var LabelButton  = require('./components/labelButton');
var MainComponent = React.createClass({


  changeContentStatus: function(id){
    this.setState({pageContentStatus:id});
  },


  render: function(){
    return(
      <div className="row">
        <SideBarComponent changeContent={this.changeContentStatus} labels={this.labels}/>
        <PageContentComponent pageContentStatus={this.state.pageContentStatus}/>
      </div>
    );
  },
  getInitialState: function(){
    return (
      {pageContentStatus:"inbox"}
    )
  },
 "labels": [
  {
   "id": "IMPORTANT",
   "name": "IMPORTANT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SENT",
   "name": "SENT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "INBOX",
   "name": "INBOX",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "TRASH",
   "name": "TRASH",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "DRAFT",
   "name": "DRAFT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SPAM",
   "name": "SPAM",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "STARRED",
   "name": "STARRED",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "UNREAD",
   "name": "UNREAD",
   "type": "system"
  }
 ]



});
ReactDom.render(<MainComponent/>, document.getElementById('app'));
