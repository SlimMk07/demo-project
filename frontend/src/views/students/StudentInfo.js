import React, { Component } from 'react';
import { FormGroup, Input, Row, Col } from "reactstrap";
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux'
import axios from 'axios'


class BasicInfoStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    console.log('student props', this.props)
    axios.get('/corses').then((res) => this.props.initCourseReducer(res.data))
  }

  saveInfos = (e) => {
    if (e.target.name === 'img')
      this.setState({ image: URL.createObjectURL(e.target.files[0]) })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, ()=> this.props.getBasicInfo(
      this.state.name, this.state.birthdate, this.state.course, this.state.email, this.state.phone, this.state.address,
      this.state.state, this.state.zipcode, this.state.about, this.state.imagePreviewUrl
    ))
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
      }, ()=>this.props.getBasicInfo(
        this.state.name, this.state.birthdate, this.state.course, this.state.email, this.state.phone, this.state.address,
        this.state.state, this.state.zipcode, this.state.about, this.state.imagePreviewUrl
      ));
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
      .then(() => this.props.initCourseReducer({
        picture: this.state.imagePreviewUrl, name: this.state.name,
        duration: this.state.duration, description: this.state.description, price: this.state.price
      }))
      .catch((err) => alert(err))
    this.props.history.push('/admin/students')
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = (imagePreviewUrl) ? <img src={imagePreviewUrl} alt="prev" /> : <div className="previewText">"Add Photo"</div>

    console.log('img', imagePreviewUrl )
    
    return (
      <div>
        <form >
          <div className="form-row">
            <div className="form-group col-md-4">
              <input type="text" className="form-control" name="name" placeholder="Full Name" required />
            </div>
            <div className="form-group col-md-3">
              <input type="date" className="form-control" name="birthdate" placeholder="Date of birth" required />
            </div>
            <div className="form-group col-md-3" name="gender">
              <select id="inputState" className="form-control" required >
                <option>Select Gender</option>
                <option value='0'>Male</option>
                <option value='1'>Female</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-10">
              <label >Studying :</label>
              <select multiple className="form-control" name="courses" id="exampleFormControlSelect2" required>
                {this.props.corse.map((el, i)=><option key={i} value={el._id}>{el.name}</option>)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="email" className="form-control" name="email" placeholder="Email" required />
            </div>
            <div className="form-group col-md-4">
              <input type="tel" className="form-control" name="phone" placeholder="Mobile.No" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-10">
              <input type="text" className="form-control" name="address" placeholder="Adress" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <select id="inputState" className="form-control" name="state" defaultValue="Tunis" >
                <option>Tunis</option>
                <option>Sousse</option>
                <option>Sfax</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <input type="text" className="form-control" name="zipcode" placeholder="Zip Code" required />
            </div>
          </div>
          <Row>
            <Col md="10">
              <FormGroup>
                <label>About</label>
                <Input
                  type="textarea" name="about"
                  defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                />
              </FormGroup>
            </Col>
          </Row>
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
          <center><button type="submit" className="btn btn-primary">Save</button></center>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    corse: state.corses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initCourseReducer: corses => {
      dispatch({
        type: 'INIT_CORSES',
        corses
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasicInfoStudent));

