import * as React from "react";

const image = require("../assets/images/langkilde.jpg");

class Portrait extends React.Component {
  
  private constructor(props) {
    super(props);
  }
  
  public render() {
    return (
      <div>
        <a href="https://www.daniel.langkilde.se">
          <img className="portrait" src={image}/>
        </a>
      </div>
    );
  }
}

export default Portrait;
