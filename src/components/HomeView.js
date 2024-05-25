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
          <div className="ContentDescription">
          PNW Craftsmen is a single crew operating in the Portland Metropolitan area.
            Our goal is to produce quality work and enjoy the process.  We
            achieve this by focusing on one project at a time. Every step of
            the process is overseen by the owner to
            produce the standard promised to our clients.  Our overhead is
            low and that is reflected in our pricing.

            <br/><br/>

            If you need carpenty work, let's discuss your needs and see if we're a
            good fit for each other.<br/>
            PHONE EMAIL CHAT


            <br/>
          </div>
        </div>
      );
    }
}

export default HomeView;
