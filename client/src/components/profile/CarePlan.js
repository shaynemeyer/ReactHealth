import React, { Component } from 'react';

export default class CarePlan extends Component {
  render() {
    return (
      <div className="care-plan">
        <h4>My Care Plan</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Schedule an eye exam</h5>
            <small>3 days ago</small>
            <p>It's time to schedule your eye exam.</p>
            <a href="#">Schedule now</a>
          </li>
          <li className="list-group-item">
            <h5>Flu shot</h5>
            <small>20 days ago</small>
            <p>It's time to schedule your flu shot. Your last flu shot was 10/05/2015.</p>
            <a href="http://healthynews.com">Schedule now</a>
        </li>
          <li className="list-group-item">
            <h5>Annual Physical</h5>
            <small>1 day ago</small>
            <p>It's time for your annual physical.</p>
            <a href="http://healthynews.com">Schedule now</a>
        </li>
        </ul>
      </div>
    );
  }
}