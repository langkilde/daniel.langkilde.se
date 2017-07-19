import * as React from "react";

interface ICvListProps {
  grouping: string;
  list_items: Array<{
    position: string,
    link: string,
    organization: string,
    duration: string
    current: Partial<boolean>,
  }>;
}

class CvList extends React.Component<ICvListProps, any> {
  
  private static renderItem(ListItem) {
    let result: any;
    if (ListItem.current) {
      result =
        <li key={ListItem.position} className="mobile-specific-list">
          <b>{ListItem.position},
            <a href={ListItem.link}>{ListItem.organization}</a>, {ListItem.duration}
          </b>
        </li>;
    } else {
      result = <li key={ListItem.position} className="mobile-specific-list">{ListItem.position}, <a
        href={ListItem.link}>{ListItem.organization}</a>, {ListItem.duration}</li>;
    }

    return (result);
  }
  
  private constructor(props) {
    super(props);
  }
  
  public render() {
    return (
      <div>
        <h3>{this.props.grouping}</h3>
        <div className="item-container">
          <ul>
            {this.props.list_items.map(CvList.renderItem)}
          </ul>
        </div>
      </div>
    );
  }
}

export default CvList;
