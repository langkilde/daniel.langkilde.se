import * as React from "react";

interface IProfilesListPros {
  grouping: string;
  list_items: Array<{
    platform: string,
    link: string,
    link_text: string,
  }>;
}

class ProfilesList extends React.Component<IProfilesListPros, any> {
  
  private static renderProfile(profile) {
    return (
      <li key={profile.platform}>{profile.platform} - <a href={profile.link}>{profile.link_text}</a></li>
    );
  }
  
  private constructor(props) {
    super(props);
  }
  
  public render() {
    return (
      <div className="item-container">
        <h3>{this.props.grouping}</h3>
        <ul>
          {this.props.list_items.map(ProfilesList.renderProfile)}
        </ul>
      </div>
    );
  }
  
}

export default ProfilesList;
