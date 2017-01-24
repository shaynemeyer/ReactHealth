import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ProfileImage from './profile/ProfileImage';
import MyClinic from './profile/MyClinic';
import LinkedAccounts from './profile/LinkedAccounts';

class Header extends Component {
  loggedOutLinks() {
    if(!this.props.authenticated) {
      // show a link to sign in or sign up
      return (
        <div>
          {this.renderAppLink()}
          <ul className="nav navbar-nav">
            <li className="nav-item" key={1}>
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item" key={2}>
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        );
    }
  }

  loggedIn() {
    if(this.props.authenticated){
      return (
        <div className="row">
          <div className="col-md-2">
            {this.renderAppLink()}
            <ProfileImage imageName="dustin_hudson.jpg" profileName="Dustin Hudson" />
            Welcome Dustin
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/signout" className="nav-link">Sign Out</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-7">
            <LinkedAccounts user="Dustin Hudson"/>
          </div>
          <div className="col-md-3 pull-right">
            <MyClinic username="dustin.hudson37@example.com" />
          </div>
        </div>
      );
    }
  }

  renderAppLink() {
      return (
        <Link to="/" className="navbar-brand">My Health</Link>
      )
  }

  render() {
    return (
      <div className="header-container">
        <nav className="navbar navbar-inverse">
          {this.loggedIn()}
          {this.loggedOutLinks()}
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);