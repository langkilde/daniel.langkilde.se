import * as React from "react";

const image = require("../images/langkilde.jpg");

interface ITitle {
  byline: string;
  name: string;
}

export class Title extends React.Component<ITitle, {}> {
  
  constructor(props: ITitle) {
    super(props);
  }
  
  public render(): React.ReactElement<{}> {
    return (
      <div className="header-container">
        <a href="https://www.daniel.langkilde.se">
          <img className="header-portrait mobile-only" src={image}/>
        </a>
        <h1 className="mobile-only-header">{this.props.name}</h1>
        <p>{this.props.byline}</p>
        <hr/>
      </div>
    );
  }
  
}
