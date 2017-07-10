import * as React from "react";

import BioList from "./bioList";
import CvList from "./cvList";
import Portrait from "./portrait";
import ProfilesList from "./profilesList";
import Title from "./title";

import Bio from "../data/bio";
import CV from "../data/cv";
import Profiles from "../data/profiles";

export default class App extends React.Component {
  
  public render() {
    return (
      <div className="container">
        <Portrait/>
        <div className="right-side">
          <Title/>
          <div className="list-container">
            <CvList grouping={CV.WORK.grouping} list_items={CV.WORK.list_items}/>
            <CvList grouping={CV.SCHOOL.grouping} list_items={CV.SCHOOL.list_items}/>
            <ProfilesList grouping={Profiles.grouping} list_items={Profiles.list_items}/>
            <BioList grouping={Bio.grouping} list_items={Bio.list_items}/>
          </div>
        </div>
      </div>
    );
  }
}
