import React from 'react';
import Image from "../../components/Image";
import photo from '../../photo.json';

let Application = React.createClass({
  createImage: function (image) {
    return <Image source={image} key={image} />;
  },

  createImages: function (images) {
    return images.map(this.createImage);
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">

            {this.createImages(photo.images)}

          </div>
        </div>
      </div>
    );
  }
});

export default Application;
