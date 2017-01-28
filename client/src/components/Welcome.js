import React from 'react';
import ContentItemOne from './content/ContentItemOne';
import JumboTron from './content/JumboTron';

export default () => {
  return (
    <div>
      <JumboTron imageName="eat_healthy.jpg" />

      <div className="row">
        <ContentItemOne title="Schedule a Consult today" imageName="bacteria.jpg" imageText="Fend off disease" />
        <ContentItemOne title="Your Partner in Health" imageName="yourpartner.jpg" imageText="Your partner in health" />
        <ContentItemOne title="Health Costs Rise" imageName="drugs_cost.jpg" imageText="Drug prices skyrocket" />
      </div>
    </div>
  );
};
