import React, { Component } from 'react';

export default class NewsFeed extends Component {
  render() {
    return (
      <div className="news-feed">
        <h4>This week</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Some interesting health info</h5>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit...</p>
            <a href="http://healthynews.com">Read more</a>
          </li>          <li className="list-group-item">
            <h5>Some interesting health info</h5>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit...</p>
            <a href="http://healthynews.com">Read more</a>
          </li>          <li className="list-group-item">
            <h5>Some interesting health info</h5>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit...</p>
            <a href="http://healthynews.com">Read more</a>
          </li>          <li className="list-group-item">
            <h5>Some interesting health info</h5>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit...</p>
            <a href="http://healthynews.com">Read more</a>
          </li>
        </ul>
      </div>
    );
  }
}