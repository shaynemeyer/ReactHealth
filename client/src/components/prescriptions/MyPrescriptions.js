import React, { Component } from 'react';

class MyPrescriptions extends Component {
  render() {
    return (
      <div className="my-prescriptions">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title border-bottom-1">My Medications</h3>
          </div>
          <div className="panel-body">
            <table className="table table-striped">
              <thead>
              <tr>
                <th>Medication/Dosage</th>
                <th>Instructions</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  Acetaminophen<br />
                  <small>500mg</small><br />

                </td>
                <td>
                  Taken twice daily for pain. <br />
                  1 pill every 12 hours.
                </td>
                <td>
                  <button className="btn btn-secondary btn-sm">Refill <i className="fa fa-battery-half" aria-hidden="true"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  Prozac<br />
                  <small>1000mg</small><br />

                </td>
                <td>
                  Taken twice daily for happy thoughts. <br />
                  1 pill every 12 hours.
                </td>
                <td>
                  <button className="btn btn-secondary btn-sm">Refill <i className="fa fa-battery-half" aria-hidden="true"></i></button>
                </td>
              </tr>
              <tr>
                <td>
                  Oxycodone<br />
                  <small>500mg</small><br />

                </td>
                <td>
                  Taken once daily if it hurts real bad. <br />
                  1 pill every 24 hours.
                </td>
                <td>
                  <button className="btn btn-secondary btn-sm">Refill <i className="fa fa-battery-half" aria-hidden="true"></i></button>
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

export default MyPrescriptions;