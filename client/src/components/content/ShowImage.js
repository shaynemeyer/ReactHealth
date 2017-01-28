import React from 'react';

const renderImage = (image) => {
  return require(`../../../assets/images/${image}`);
}

export default ({imageName, profileName, imageClassName}) => {
  return (
    <div className={imageClassName}>
      <img src={renderImage(imageName)} alt={profileName} className="img-circle"/>
      <div className="profile-image-subtitle">Welcome Dustin</div>
    </div>
  );
}