import React, { Component } from 'react';

class TestResults extends Component {
  render() {
    return (
      <div className="test-results">
        <h4>Test Results</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>LIPID PROFILE</h5>
            10/22/2016 -> <a href="http://healthynews.com">Show details</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TestResults;