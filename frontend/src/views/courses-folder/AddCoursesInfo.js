import React, { Component } from 'react';
import 'views/courses-folder/courses.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'

class BasicInfoCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '', imagePreviewUrl: '', name: '', duration: '', description: '', price: ''
    }
  }
  saveInfos = (e) => {
    if (e.target.name === 'img')
      this.setState({ image: URL.createObjectURL(e.target.files[0]) })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _handleImgSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file, imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  addCourse = () => {
    if (!this.state.imagePreviewUrl || !this.state.name || !this.state.duration ||
      !this.state.description || !this.state.price)
      console.log('add course')
    axios.post('/add_corse', {
      picture: this.state.imagePreviewUrl, name: this.state.name,
      duration: this.state.duration, description: this.state.description, price: this.state.price
    })
    .then(() => this.props.addCourseReducer({
      picture: this.state.imagePreviewUrl, name: this.state.name,
      duration: this.state.duration, description: this.state.description, price: this.state.price
    }))
    .catch((err) => alert(err))
    this.props.history.push('/admin/courses')
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = (imagePreviewUrl) ? <img src={imagePreviewUrl} alt="prev" /> : <div className="previewText">"Add Photo"</div>
    console.log('prev', this.state.imagePreviewUrl)

    return (
      <div >
        <form >
          <div className="form-row">
            <div className="form-group col-md-5">
              <input type="text" className="form-control" name="name" placeholder="Course Name"
                value={this.state.name} onChange={this.handleChange} required />
            </div>
            <div className="form-group col-md-4">
              <input type="number" className="form-control" name="duration" placeholder="Course Duration"
                value={this.state.duration} onChange={this.handleChange} required />
            </div>
            <p className='duration'>Minutes</p>
          </div>
          <div className="form-row">
            <div className="form-group col-md-10">
              <textarea className="form-control" name="description" rows={3} placeholder="Course Description"
                value={this.state.description} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-9">
              <input type="number" className="form-control" name="price" placeholder="Course Price"
                value={this.state.price} onChange={this.handleChange} required />
            </div>
            <p className='price'>DT</p>
          </div>
          <div className="form-row">
            <div className="form-group col-md-2">
              <div className="previewComponent">
                <div onSubmit={e => this._handleImgSubmit(e)}>
                  <input type="file" className="image" onChange={e => this._handleImageChange(e)}></input>
                  <button className="submitButton" type="submit" onClick={e => this._handleImgSubmit(e)}>"Select file"</button>
                  <div className='imgPreview'>{$imagePreview}</div>
                </div>
              </div>
            </div>
          </div>
          <center><button className="btn btn-primary" onClick={this.addCourse}>Save</button></center>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCourseReducer: corse => {
      dispatch({
        type: 'ADD_CORSE',
        corse
      })
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(BasicInfoCourse));