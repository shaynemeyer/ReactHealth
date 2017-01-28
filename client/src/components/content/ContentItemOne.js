import React from 'react';

const renderImage = (image) => {
  return require(`../../../assets/images/${image}`);
}

export default (props) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={renderImage(props.imageName)} alt={props.imageText} className="small-content-image" />
        <div className="caption">
          <h3>{props.title}</h3>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
        </div>
      </div>
    </div>
  );
}

