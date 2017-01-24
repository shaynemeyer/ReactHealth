import React from 'react';

const renderImage = (image) => {
  return require(`../../../assets/images/${image}`);
}

export default ({imageName, profileName}) => {
    return (
      <div className="profile-image">
        <img src={renderImage(imageName)} alt={profileName} className="img-circle"/>
      </div>
  );
}

