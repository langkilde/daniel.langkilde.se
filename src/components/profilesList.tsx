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
      <li key={profile.platform}
          className="mobile-specific-list">{profile.platform} - <a href={profile.link}>{profile.link_text}</a>
      </li>
    );
  }
  
  private constructor(props) {
    super(props);
  }
  
  public render() {
    return (
      <div>
        <h3>{this.props.grouping}</h3>
        <ul>
          <div className="item-container">
            {this.props.list_items.map(ProfilesList.renderProfile)}
          </div>
        </ul>
      </div>
    );
  }
  
}

export default ProfilesList;
