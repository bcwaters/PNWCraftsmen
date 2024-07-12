import React from 'react';
import fenceIcon from "../res/fenceicon.png"
import PhotoGallery from "./PhotoGallery.js"


import deckIcon from "../res/GoodNeighbor.jpg"
import stockFence from "../res/stockFencepg.jpeg"
import largeImage from "../res/horizontalfence.jpg"
import ShadowboxFence from "../res/ShadowboxFence.png"

class FencesView extends React.Component {

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
            The average lifespan of a good cedar fence ranges
            between 15 to 40 years. Often the posts and railings begin to fail before
            the fence pickets themselves. Sometimes a simple repair of a few sections
            can keep your fence viable for many years.  We can do that for you.
            <br/><br/>
            If you need a new fence we can build it to last.  We can match any style
            of fence you need, or help you pick out a new one.
            <br></br><br/>

  
            Limited time offer! Demo, materials, and installation for $25 per foot<br></br>
            Text or call: 503-504-7833
            <br/>
          </div>

          <div className = "ContentIcon">
                <img onClick={this.toggleGallery} src={ShadowboxFence} className="GalleryIcon" alt="logo" />
                <div onClick={this.toggleGallery} className="GalleryLink">Click to view fences</div>


                <PhotoGallery galleryImages={[
              
                  
                  {img:ShadowboxFence, desc: "Shadowbox"},
                  {img:largeImage, desc: "Horizontal"},
                  ]}
                 toggleGallery={this.toggleGallery} showGallery={this.state.showGallery}/>
          </div>

        </div>
      );
    }
}

export default FencesView;
