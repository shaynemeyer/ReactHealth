import React from 'react';

export default ({name, imageName, isChild}) => {

  const renderImage = (image) => {
    if(image != '') {
      return require(`../../../assets/images/${image}`);
    }
    else {
      return require('../../../assets/images/nophoto_user.png');
    }
  }

  const isAdult = () => {
    if(isChild == "true") {
      return "child-img";
    } else {
      return "adult-img"
    }
  }

  return (
    <li className="nav-item linked-account-item">
      <img src={renderImage(imageName)} alt={name} className={`img-circle ${isAdult()}`}/>
    </li>
  );
}