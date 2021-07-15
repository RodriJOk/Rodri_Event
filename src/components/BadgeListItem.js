import React from 'react';
import './styles/BadgesListItem.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
          />
  
          <div className="rodri">
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }

  export default BadgesListItem