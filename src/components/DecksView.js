import React from 'react';
import deckIcon from '../res/deckicon.png'

class DecksView extends React.Component {
    render(){
      return(
        <div className="ContentView">
          <div className="ContentDescription">
            Decks should be pleasing to the eye,
            increase the amount of space utilized on your property, and add value to your home.

            As a deck ages it no longer meets those criteria.  The deck boards look old, the framing may be
            too deteriorated to walk on, and utimately the deck becomes a liabibilty to your home.

            <br/><br/>

            Our work on decks ranges from new builds to resurfacing to simple repairs.  We work with wood
            and composite.
            <br/><br/>

            <br/><br/>

            <br/>
            PHONE EMAIL CHAT


            <br/>
          </div>

          <div className = "ContentIcon">
                <img src={deckIcon} className="GalleryIcon" alt="logo" />
                  <div className="GalleryLink">Click to view decks</div>
          </div>
        </div>
      );
    }
}

export default DecksView;
