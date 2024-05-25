import React from 'react';
import fenceIcon from "../res/fenceicon.png"
class FencesView extends React.Component {
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
            <br/><br/>

            <br/>
            PHONE EMAIL CHAT
            <br/>
          </div>

          <div className = "ContentIcon">
                <img src={fenceIcon} className="GalleryIcon" alt="logo" />
                <div className="GalleryLink">Click to view fences</div>
          </div>

        </div>
      );
    }
}

export default FencesView;
