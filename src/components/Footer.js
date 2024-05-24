import React from 'react';
import footerImage from '../footerImage.png';

class Footer extends React.Component {
    render(){
      return(
        <div className="Footer">
          <img src={footerImage} className="App-logo" alt="logo" />
          PNW Craftsmen LLC will be Licensed, Insured, and Bonded Soon CCB#123456
        </div>
      );
    }
}

export default Footer;
