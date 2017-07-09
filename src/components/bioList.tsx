import * as React from 'react';

interface bioListProps {
  grouping: string;
  list_items: Array<{
    sentence: string
  }>
}

class BioList extends React.Component<bioListProps, any> {
  
  constructor(props) {
    super(props);
  }
  
  renderBioItem(bioItem) {
    return (
      <li key={bioItem.sentence}>{bioItem.sentence}</li>
    )
  }
  
  render() {
    return (
      <div>
        <h3>{this.props.grouping}</h3>
        <ul>
          {this.props.list_items.map(this.renderBioItem)}
        </ul>
      </div>
    )
  }
}

export default BioList;

