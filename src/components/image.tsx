import * as React from 'react';

const image = require('../assets/images/langkilde.png');

export default class Image extends React.Component {
  render() {
    return (
      <div >
        <img src={image}/>
      </div>
    );
  }
}