import React from 'react';
import HomeView from './HomeView'
import FencesView from './FencesView'
import DecksView from './DecksView'
import FinishCarpentryView from './FinishCarpentryView'
import ContactView from './ContactView'

var views = {
  "Home" : <HomeView/>,
  "Fences": <FencesView/>,
  "Decks" : <DecksView/>,
  "Carpentry" : <FinishCarpentryView/>,
  "Contact" : <ContactView/>

}
class ContentBody extends React.Component {

    render(){
      return(
        <div className="ContentBody">
        <div className="content-Top-Padding"/>
              {views[this.props.pageName]}
        </div>
      );
    }
}

export default ContentBody;
