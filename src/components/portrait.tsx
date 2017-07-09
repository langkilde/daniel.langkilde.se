import * as React from 'react';

const image = require('../assets/images/langkilde.jpg');

class Portrait extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="left-side desktop-only">
        <a href="https://www.daniel.langkilde.se">
          <img className="portrait" src={image}/>
        </a>
      </div>
    );
  }
}

export default Portrait;