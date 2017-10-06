import * as React from "react";

const image = require("../images/langkilde.jpg");

export class Portrait extends React.Component<{}, any> {
  
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
