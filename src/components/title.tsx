import * as React from "react";

const image = require("../assets/images/langkilde.jpg");

class Title extends React.Component {
  
  private constructor(props) {
    super(props);
  }
  
  public render() {
    return (
      <div className="header-container">
        <a href="https://www.daniel.langkilde.se">
          <img className="header-portrait mobile-only" src={image}/>
        </a>
        <h1 className="mobile-only-header">Daniel Langkilde</h1>
        <p>Passionate about creating value using machine learning.</p>
        <hr/>
      </div>
    );
  }
}

export default Title;
