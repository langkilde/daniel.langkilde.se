import * as React from 'react';

const image = require('../assets/images/langkilde.jpg');

class Portrait extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <a href="https://www.daniel.langkilde.se">
          <img className="mobile-only portrait" src={image}/>
        </a>
        <a href="https://www.daniel.langkilde.se">
          <img className="tablet-only portrait" src={image}/>
        </a>
        <a href="https://www.daniel.langkilde.se">
          <img className="desktop-only portrait" src={image}/>
        </a>
      </div>
    );
  }
}

export default Portrait;