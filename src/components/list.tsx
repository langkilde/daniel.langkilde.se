import * as React from "react";

interface IListItem {
  description: string;
  link?: string;
  link_text?: string;
  time?: string;
}

export interface IList {
  name: string;
  list_items: Array<IListItem>
}

export class List extends React.Component<IList> {
  
  private constructor(props: IList) {
    super(props);
  }
  
  private static renderItem(ListItem: IListItem) {
    return (
      <li key={ListItem.description} className="mobile-specific-list">
        {ListItem.description}, <a href={ListItem.link}>{ListItem.link_text}</a>, {ListItem.time}
      </li>
    );
  }
  
  public render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <div className="item-container">
          <ul>
            {this.props.list_items.map(List.renderItem)}
          </ul>
        </div>
      </div>
    );
  }
}
