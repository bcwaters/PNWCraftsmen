import React from 'react';

class ContactView extends React.Component {
    render(){
      return(
        <div className="ContentView">
          <div className="ContactText"  style={{ textAlign:"left",marginLeft:"15vw", marginRight:"15vw", paddingTop:"10vh", width:"100%"}}>

            We want to talk with you. 
          
            Email, text, or call us with any questions. <br/>

            <div>  <br/>
            <br/>
            <br/>
            <br/>
            <b>Email:</b>  Brent@pnwcraftsmenpdx.com
            <br/>
            <b>Phone:</b> 503-504-7833
            <br/></div>
          
          </div>
   
        </div>
      );
    }
}

export default ContactView;
