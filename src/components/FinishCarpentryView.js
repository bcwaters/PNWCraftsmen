import React from 'react';
import trimIcon from '../res/trimicon.png'
import PhotoGallery from "./PhotoGallery.js"

class FinishCarpentryView extends React.Component {
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
        <div className="ContentView">
          <div className="ContentDescription">

            The last %10 of any project is what stands our the most
            <br/><br/>

            We offer high quality trim work at competetive prices
            <br/><br/>



            <br/>
            PHONE EMAIL CHAT


            <br/>
          </div>

          <div className = "ContentIcon">
                <img onClick={this.toggleGallery} src={trimIcon} className="GalleryIcon" alt="logo" />
                <div onClick={this.toggleGallery} className="GalleryLink">Click to view trim work</div>

                <PhotoGallery galleryImages={[trimIcon]} toggleGallery={this.toggleGallery} showGallery={this.state.showGallery}/>
          </div>
        </div>
      );
    }
}

export default FinishCarpentryView;
