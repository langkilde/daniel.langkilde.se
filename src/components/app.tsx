import * as React from 'react';
import Portrait from './portrait';
import Title from './title';
import CvList from './cvList';
import CV from '../data/cv';
import ProfilesList from "./profilesList";
import Profiles from '../data/profiles';
import BioList from "./bioList";
import Bio from '../data/bio';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Portrait/>
        <div className="right-side">
          <Title/>
          <CvList grouping={CV.WORK.grouping} list_items={CV.WORK.list_items}/>
          <CvList grouping={CV.SCHOOL.grouping} list_items={CV.SCHOOL.list_items}/>
          <ProfilesList grouping={Profiles.grouping} list_items={Profiles.list_items}/>
          <BioList grouping={Bio.grouping} list_items={Bio.list_items}/>
        </div>
      </div>
    );
  }
}
