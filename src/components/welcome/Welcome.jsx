import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div className="welcome-image-mask">
          <img src="images/welcome.jpg" />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Welcome;
