import React, { Component } from 'react';
import LinkedAccountItems from './LinkedAccountItems';

class LinkedAccounts extends Component {

  renderLinkedAccounts(user) {

    return (
      <div>
        <div className="">
          <div className="">
            <ul>
              <LinkedAccountItems name="Julie Hudson" imageName="julie_hudson.jpg" isChild="false" />
              <LinkedAccountItems name="Max Hudson" imageName="" isChild="true" />
              <LinkedAccountItems name="Vivian Hudson" imageName="" isChild="true"/>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { username } = this.props;

    return (
      <div className="linked-accounts">
        {this.renderLinkedAccounts(username)}
      </div>
    );
  }
}

export default LinkedAccounts;