import React from 'react';
import banner from '../TopBarImage.png';
import NavLink from './NavLink'


class TopBar extends React.Component {
  constructor(props) {
  super(props);
  this.state = {};
}
    render(){
      return(
        <div className="Top-Bar">
        CONSTRUCTION & RESTORATION
              <div className="NavBarContainer">
                <NavLink setPageName={this.props.setPageName} text="Home"/>
                <NavLink setPageName={this.props.setPageName}  text="Fences"/>
                <NavLink setPageName={this.props.setPageName}  text="Decks"/>
                <NavLink setPageName={this.props.setPageName}  text="Carpentry"/>
                <NavLink setPageName={this.props.setPageName}  text="Contact"/>
              </div>
        </div>
      );
    }
}

export default TopBar;
