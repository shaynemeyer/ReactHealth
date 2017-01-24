import React, { Component } from 'react';
import MyProvider from './MyProvider';

export default class MyClinic extends Component {

  renderMyClinic(user) {

    return (
      <div>
        <div className="card">
          <div className="card-block">


              <img src="https://polyclinic.com/sites/all/themes/adaptivetheme/at_subtheme/images/Polyclinic-100-Years_v2.png" alt="Polyclinic" />
            <a href="https://polyclinic.com/locations/madison-center">
              <div className="card-title">
                My clinic is:
                <h5>Madison Center</h5>
              </div>
            </a>
            <div className="card-text">
              <address>
                904 7th Ave.
                Seattle, WA. 98104
              </address>
              <MyProvider />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { username } = this.props;

    return (
      <div className="my-clinic">
        {this.renderMyClinic(username)}
      </div>
    );
  }
}