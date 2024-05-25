import React from 'react';
import trimIcon from '../res/trimicon.png'
class FinishCarpentryView extends React.Component {
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
                <img src={trimIcon} className="GalleryIcon" alt="logo" />
                <div className="GalleryLink">Click to view trim work</div>
          </div>
        </div>
      );
    }
}

export default FinishCarpentryView;
