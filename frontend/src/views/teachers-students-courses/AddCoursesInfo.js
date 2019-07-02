import React, { Component } from 'react';
import './course.css'

// import { connect } from 'react-redux'
// import axios from 'axios'

class BasicInfo3 extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' }
  }
  saveInfos = (e) => {
    if (e.target.name === 'img')
      this.setState({ image: URL.createObjectURL(e.target.files[0]) })
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
    let $imagePreview = (imagePreviewUrl) ? <img src='imagePreviewUrl' alt="prev"/> : <div className="previewText">"Add Photo"</div>
    console.log(this.state.file, this.state.imagePreviewUrl)

    return (
      <div>
        <form >
          <div className="form-row">
            <div className="form-group col-md-5">
              <input type="text" className="form-control" name="name" placeholder="Course Name" required />
            </div>
            <div className="form-group col-md-4">
              <input type="number" className="form-control" name="duration" placeholder="Course Duration" required />
            </div>
            <p className='duration'>Minutes</p>
          </div>
          <div className="form-row">
            <div className="form-group col-md-10">
              <textarea className="form-control" name="description" rows={3} placeholder="Course Description" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-9">
              <input type="number" className="form-control" name="price" placeholder="Course Price" required />
            </div>
            <p className='price'>DT</p>
          </div>
          <div className="form-row">
            <div className="form-group col-md-2">
              <div className="previewComponent">
                <div onSubmit={e => this._handleSubmit(e)}>
                  <input type="file" className="image" onChange={e => this._handleImageChange(e)}></input>
                  <button className="submitButton" type="submit" onClick={e => this._handleSubmit(e)}>"Select file"</button>
                  <div className='imgPreview'>{$imagePreview}</div>
                </div>
              </div>
            </div>
          </div>
          <center><button type="submit" className="btn btn-primary">Save</button></center>
        </form>
      </div>
    );
  }
}

export default BasicInfo3;