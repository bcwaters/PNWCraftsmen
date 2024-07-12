import React from 'react';
import footerImage from '../footerImage.png';

class Footer extends React.Component {
    render(){
      return(
        <div className="Footer">
          <img src={footerImage} className="App-logo" alt="logo" />
          Oregon Licensed Contractor CCB#: 252081
        </div>
      );
    }
}

export default Footer;
