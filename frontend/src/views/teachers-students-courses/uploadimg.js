import React, { Component } from 'react';
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = (imagePreviewUrl)? <img src='imagePreviewUrl' alt="prev"/> : <div className="previewText">"Add Photo"</div>
    console.log(this.state.file, this.state.imagePreviewUrl)
   
    return (
      <div className="previewComponent">
        <div onSubmit={e => this._handleSubmit(e)}>
          <input type="file" className="image" onChange={e => this._handleImageChange(e)}></input>
          <button className="submitButton" type="submit" onClick={e => this._handleSubmit(e)}>"Select file"</button>
          <div className='imgPreview'>{$imagePreview}</div>
        </div>
      </div>
    )}
}


export default ImageUpload