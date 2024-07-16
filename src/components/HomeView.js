import React from 'react';

class HomeView extends React.Component {
  constructor(props) {
  super(props);
  this.state = {showGallery:false};
  this.toggleGallery = this.toggleGallery.bind(this);

  }

  toggleGallery(){

    this.setState({showGallery:!this.state.showGallery})
  }

    render(){
      return(
        <div className="HomeView">
        
          <div className="HomeText" style={{ fontWeight: 600, marginLeft:"10vw", marginRight:"10vw"}}>
          PNW Craftsmen is a single crew operating in the Greater Portland area.
            Our goal is to produce quality work and enjoy the process.  We
            achieve this by focusing on one project at a time. Every step of
            the process is overseen by the owner to
            produce the standard promised to our clients.  Our overhead is
            low and that is reflected in our pricing.

            <br/><br/>

            If you need carpentry work, let's discuss your needs and see if we're a
            good fit for each other.<br/>
            <br></br>
            You can call or text at 503-504-7833


            <br/>
          </div>
       
        </div>
      );
    }
}

export default HomeView;
