import React, { Component } from 'react';

class Upcoming extends Component {
  render() {
    return (
      <div className="upcoming">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Upcoming Appointments</h3>
          </div>
          <div className="panel-body">
            <table className="table table-striped">
              <thead>
              <tr>
                <th>Appointment</th>
                <th>Instructions</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  Physical with Dr Baily<br />
                </td>
                <td>
                  No eating after midnight, water ok.
                </td>
                <td>
                  <button className="btn btn-danger btn-sm">Cancel <i className="fa fa-times" aria-hidden="true"></i></button>
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

export default Upcoming;