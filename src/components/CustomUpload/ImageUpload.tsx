import React from 'react';
// used for making the prop types of this component

// core components
import Button from '@/components/CustomButtons/Button';

import defaultImage from '@/assets/img/image_placeholder.jpg';
import defaultAvatar from '@/assets/img/placeholder.jpg';

export interface IImageUploadTypes {
  avatar?: boolean;
  addButtonProps: object;
  changeButtonProps: object;
  removeButtonProps: object;
}
class ImageUpload extends React.Component<
  IImageUploadTypes,
  { file: any; imagePreviewUrl: any }
> {
  fileInputRef: HTMLInputElement = null;

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage,
    };
  }

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

  handleSubmit = e => {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  };

  handleClick = () => {
    this.fileInputRef.click();
  };

  handleRemove = () => {
    this.setState({
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage,
    });
    this.fileInputRef.value = null;
  };

  render() {
    const {
      avatar,
      addButtonProps,
      changeButtonProps,
      removeButtonProps,
    } = this.props;
    return (
      <div className="fileinput text-center">
        <input
          type="file"
          onChange={this.handleImageChange}
          ref={ref => {
            this.fileInputRef = ref;
          }}
        />
        <div className={`thumbnail${avatar ? ' img-circle' : ''}`}>
          <img src={this.state.imagePreviewUrl} alt="..." />
        </div>
        <div>
          {this.state.file === null ? (
            <Button {...addButtonProps} onClick={() => this.handleClick()}>
              {avatar ? 'Add Photo' : 'Select image'}
            </Button>
          ) : (
            <span>
              <Button {...changeButtonProps} onClick={() => this.handleClick()}>
                Change
              </Button>
              {avatar ? <br /> : null}
              <Button
                {...removeButtonProps}
                onClick={() => this.handleRemove()}
              >
                <i className="fas fa-times" />
                Remove
              </Button>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default ImageUpload;
