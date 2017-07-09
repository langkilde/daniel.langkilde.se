import * as React from 'react';
import Portrait from './portrait';
import Title from './title';
import CvList from './cv-list';
import CV from '../data/cv';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="left-side">
          <Portrait/>
        </div>
        <div className="right-side">
          <Title/>
          <CvList grouping={CV.WORK.grouping} list_items={CV.WORK.list_items}/>
          <CvList grouping={CV.SCHOOL.grouping} list_items={CV.SCHOOL.list_items}/>
        </div>
      </div>
    );
  }
}
