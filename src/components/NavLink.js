import React from 'react';

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

        onClick = () => {this.props.setPageName(this.props.text)};



    render(){
      return(
        <div onClick={this.onClick} className="NavLink">
          {this.props.text.replace(" ","\n")}
        </div>
      );
    }
}

export default NavLink;
