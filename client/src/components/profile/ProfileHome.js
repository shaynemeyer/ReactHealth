import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewsFeed from '../news/NewsFeed';
import CarePlan from '../profile/CarePlan';
import Upcoming from '../profile/Upcoming';
import MyPrescriptions from '../prescriptions/MyPrescriptions';
import VisitSummaries from './VisitSummaries';
import TestResults from './TestResults';

class ProfileHome extends Component {
  componentWillMount(){
    //this.props.fetchMessage();
  }

  render() {
    return (
      <div className="row main-content-wrapper">
        <div className="col-md-3">
          <NewsFeed />
        </div>
        <div className="col-md-6 ">
          <div className="main-content">
            <Upcoming />
            <MyPrescriptions/>
            <VisitSummaries/>
          </div>
        </div>
        <div className="col-md-3">
          <TestResults/>
          <CarePlan />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(ProfileHome);