import React, { Component } from 'react';
import LinkedAccountItems from './LinkedAccountItems';

class LinkedAccounts extends Component {

  renderLinkedAccounts(user) {

    return (
      <div className="linked-accounts">
        <div className="card">
          <div className="card-block">
            <h6 className="card-title">Linked Accounts</h6>
            <div className="navbar">
              <ul className="nav navbar-nav">
                <LinkedAccountItems name="Julie" imageName="julie_hudson.jpg" isChild="false" />
                <LinkedAccountItems name="Max" imageName="" isChild="true" />
                <LinkedAccountItems name="Vivian" imageName="" isChild="true"/>
              </ul>
            </div>
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