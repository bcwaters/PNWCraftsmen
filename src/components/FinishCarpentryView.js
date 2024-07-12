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

            I enjoy small detail oriented jobs.  If your home or small business needs a nice finishing touch I'm your guy.  
            I build shelving and stands for organization, display cases, garden beds, and pretty much anything you dream up!
            <br/><br/>

            <br/><br/>



            <br/>



            <br/>
          </div>

          <div className = "ContentIcon">
                <img onClick={this.toggleGallery} src={trimIcon} className="GalleryIcon" alt="logo" />
                <div onClick={this.toggleGallery} className="GalleryLink">Click to view sample projects</div>

                <PhotoGallery galleryImages={[
                          {img:trimIcon, desc: "Finish Work"},
                ]} toggleGallery={this.toggleGallery} showGallery={this.state.showGallery}/>
          </div>
        </div>
      );
    }
}

export default FinishCarpentryView;
