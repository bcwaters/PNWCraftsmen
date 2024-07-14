import React from 'react';
import deckIcon from '../res/PINE.png'
import compositeDeck from '../res/composite.jpg'
import IpeDeck from '../res/IpeDeck.jpg'
import PhotoGallery from "./PhotoGallery.js"

class DecksView extends React.Component {
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
            Decks should be pleasing to the eye,
            increase the amount of space utilized on your property, and add value to your home.

            As a deck ages it no longer meets those criteria.  The deck boards look old, the framing may be
            too deteriorated to walk on, and utimately the deck becomes a liabibilty to your home.

            <br/><br/>

            Our work on decks ranges from new builds to resurfacing to simple repairs.  We work with wood
            and composite.
            <br/><br/>
          </div>
          

          </div>

          <div className = "ContentIcon">
            <div className="ContentBorder">
              <div className = "GalleryTitle">Deck Gallery</div>
              <img onClick={this.toggleGallery} src={deckIcon} className="GalleryIcon" alt="logo" />
              <div onClick={this.toggleGallery} className="GalleryLink">View decks</div>

              <PhotoGallery galleryImages={[
                  
                          {img:deckIcon, desc: "Wooden Deck"},
                              {img:IpeDeck, desc: "Ipe Deck"},
                              {img:compositeDeck, desc: "Composite Deck"}
                        ]}
                    toggleGallery={this.toggleGallery} showGallery={this.state.showGallery}/>
            </div>
          </div>
          
        </div>
      );
    }
}

export default DecksView;
