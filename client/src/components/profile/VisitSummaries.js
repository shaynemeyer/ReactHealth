import React, { Component } from 'react';

class VisitSummaries extends Component {
  render() {
    return (
      <div className="visit-summaries">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Visit Summaries</h3>
          </div>
          <div className="panel-body">
            <table className="table table-striped">
              <thead>
              <tr>
                <th>Appointment</th>
                <th>Description</th>
                <th>Location</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  10/22/16 8:30am
                </td>
                <td>
                  Physical with Dr Baily
                </td>
                <td>
                  Polyclinic Madison Center
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default VisitSummaries;