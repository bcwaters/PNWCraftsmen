import React from 'react';

class ContentBody extends React.Component {
    render(){
      return(
        <div className="content-Body">


                Currently on the {this.props.pageName} Page<br/>

        </div>
      );
    }
}

export default ContentBody;
