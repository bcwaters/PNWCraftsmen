import React from 'react';
import trimIcon from '../res/trimicon.png'
import PhotoGallery from "./PhotoGallery.js"

import cupHolder from '../res/cupholder.jpeg'
import plexiglasscover from '../res/plexiglasscover.jpg'
import spiceStand from '../res/spicestand.jpg'
import syrupStand from '../res/tieredsyrupstand.jpg'

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
            <div className="ContentText">

            I enjoy small detail oriented jobs.  If your home or small business needs a nice finishing touch I'm your guy.  
            I build shelving and stands for organization, display cases, garden beds, and pretty much anything you dream up!
            <br/><br/>

            </div>
          </div>

          <div className = "ContentIcon">
            <div className="ContentBorder">
              <div className = "GalleryTitle">Photo Gallery</div>
              <img onClick={this.toggleGallery} src={spiceStand} className="GalleryIcon" alt="logo" />
              <div onClick={this.toggleGallery} className="GalleryLink">View sample projects</div>
              <PhotoGallery galleryImages={[
                          {img:spiceStand, desc: "Spice Stand"},
                          {img:plexiglasscover, desc: "Plexiglass cover"},
                          {img:cupHolder, desc: "Cup Holder"},
                          {img:syrupStand, desc: "Syrup Stand"},
                ]} toggleGallery={this.toggleGallery} showGallery={this.state.showGallery}/>
            </div>
          </div>
          
        </div>
      );
    }
}

export default FinishCarpentryView;
