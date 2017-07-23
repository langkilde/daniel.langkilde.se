import * as React from "react";

import {List} from "./list";
import {Portrait} from "./portrait";
import {Title} from "./title";
import {workList} from "../data/work";
import {schoolList} from "../data/school";
import {profilesList} from "../data/profiles";
import {bioList} from "data/bio";

export class App extends React.Component<{}, {}> {
  
  public render() {
    return (
      <div className="section group">
        <div className="col span_1_of_2 desktop-only">
          <Portrait/>
        </div>
        <div className="col span_2_of_2">
          <Title name="Daniel Langkilde" byline="Passionate about creating value using machine learning."/>
          <List {...workList}/>
          <List {...schoolList}/>
          <List {...profilesList}/>
          <List {...bioList}/>
        </div>
        <div className="footer">busy building things</div>
      </div>
    );
  }
}
