import React, { Component } from "react";
import './../assets/css/login.css';
import { GoogleLoginButton } from "react-social-login-buttons";
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './../variables/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };

class FormPage extends Component {
  constructor(props) {
    super(props);
    const { user } = props;
    this.state = { email: '', password: '', isConnected: (user != null) }
  }

  componentDidMount() {
    this.setState({ isConnected: (this.props.user != null) })
  }

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    this.setState({ isConnected: (user != null) })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.user != null) { 
      const {user, signOut} = nextProps
      this.props.login({user, signOut})
    }
    return (this.state.isConnected !== nextState.isConnected)
  }

  signInSignUp = () => {
    const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = this.props;
    const create = createUserWithEmailAndPassword(this.state.email, this.state.password)
    create.then((value) => {
      if (!value) {
        const create = signInWithEmailAndPassword(this.state.email, this.state.password)
        create.then((value) => {
          if (!value) alert('wrong email or password')
        })
      }
    })
  }

  handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

  render() {
    const { signInWithGoogle } = this.props;

    console.log(this.props, this.state.isConnected)
    if (this.state.isConnected)
      return <Redirect to="/admin/dashboard"></Redirect>

    return (
      <section className="bglogin">
        <center><h3 className="logo"> General Manager</h3></center>
        <div className="login-wrap">
          <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
            <label htmlFor="tab-1" className="tab">Authentication</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab"></label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">Username</label>
                  <input required id="user" name='email' type="email" className="input"
                    onChange={this.handleChange} />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Password</label>
                  <input required id="pass" name='password' type="password" className="input"
                    onChange={this.handleChange} />
                </div>
                <div className="group">
                  <input id="check" type="checkbox" className="check" defaultChecked />
                  <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
                </div>
                <div className="group">
                  <Link to={this.state.isConnected ? '/admin/dashboard' : '/'}>
                    <input type="button" onClick={this.signInSignUp} className="button" defaultValue="Sign in / Sign up" />
                  </Link>

                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <Link to={this.state.isConnected ? '/admin/dashboard' : '/'}>
                    <GoogleLoginButton className='gmail-button' onClick={signInWithGoogle} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: connection => {
      dispatch({
        type: 'CONNECT',
        connection
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(withFirebaseAuth({ providers, firebaseAppAuth })(FormPage))