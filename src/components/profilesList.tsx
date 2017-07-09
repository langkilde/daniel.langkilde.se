import * as React from 'react';

interface ProfilesListPros {
  grouping: string;
  list_items: Array<{
    platform: string,
    link: string,
    link_text: string
  }>
}

class ProfilesList extends React.Component<ProfilesListPros, any> {
  
  constructor(props) {
    super(props);
  }
  
  renderProfile(profile) {
    return (
      <li key={profile.platform}>{profile.platform} - <a href={profile.link}>{profile.link_text}</a></li>
    )
  }
  
  render() {
    return (
      <div>
        <h3>{this.props.grouping}</h3>
        <ul>
          {this.props.list_items.map(this.renderProfile)}
        </ul>
      </div>
    )
  }
}

export default ProfilesList;


