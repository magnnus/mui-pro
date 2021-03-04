/* eslint-disable react/no-unused-state */
import React from 'react';

import defaultImage from '@/assets/img/default-avatar.png';

class PictureUpload extends React.Component {
  state = {
    file: null,
    imagePreviewUrl: defaultImage,
  };

  handleImageChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  // eslint-disable-next-line class-methods-use-this
  handleSubmit = e => {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  };

  render() {
    return (
      <div className="picture-container">
        <div className="picture">
          <img
            src={this.state.imagePreviewUrl}
            className="picture-src"
            alt="..."
          />
          <input type="file" onChange={e => this.handleImageChange(e)} />
        </div>
        <h6 className="description">Choose Picture</h6>
      </div>
    );
  }
}

export default PictureUpload;
