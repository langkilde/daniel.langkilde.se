import * as React from "react";

import {bioList} from "../data/bio";
import {profilesList} from "../data/profiles";
import {schoolList} from "../data/school";
import {workList} from "../data/work";
import {List} from "./List";
import {Portrait} from "./Portrait";
import {Title} from "./Title";

export class Daniel extends React.Component<{}> {

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
