import React from 'react';

const renderImage = (image) => {
  return require(`../../../assets/images/${image}`);
}

export default (props) => {
  return (
    <div className="jumbotron">
      <div className="container">
        <img src={renderImage(props.imageName)} alt={props.imageText} className="jumbotron-content-image" />
      </div>
    </div>
  );
}