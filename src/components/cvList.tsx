import * as React from 'react';

interface CvListProps {
  grouping: string;
  list_items: Array<{
    position: string,
    link: string,
    organization: string,
    duration: string
    current: Partial<boolean>
  }>
}

class CvList extends React.Component<CvListProps, any> {
  
  constructor(props) {
    super(props);
  }
  
  renderItem(ListItem) {
    let result: any;
    if (ListItem.current) {
      result = <li key={ListItem.position}><b>{ListItem.position}, <a href={ListItem.link}>{ListItem.organization}</a>, {ListItem.duration}</b></li>
    } else {
      result = <li key={ListItem.position}>{ListItem.position}, <a
        href={ListItem.link}>{ListItem.organization}</a>, {ListItem.duration}</li>
    }
    return(result)
  }
  
  render() {
    return (
      <div>
        <h3>{this.props.grouping}</h3>
        <ul>
          {this.props.list_items.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

export default CvList;


