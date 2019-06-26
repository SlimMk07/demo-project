import app from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSjWKFiDWFLfl7M3MnAsQefS18UZ7BNfU",
    authDomain: "oauth-8c49b.firebaseapp.com",
    databaseURL: "https://oauth-8c49b.firebaseio.com",
    projectId: "oauth-8c49b",
    storageBucket: "oauth-8c49b.appspot.com",
    messagingSenderId: "962794367709",
    appId: "1:962794367709:web:1593db2b029ac1ec"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
    }
  }
  
  export default Firebase;