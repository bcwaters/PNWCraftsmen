import React from 'react';
import logo from '../footerImage.png';

class Footer extends React.Component {
    render(){
      return(
        <div className="Footer">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      );
    }
}

export default Footer;
