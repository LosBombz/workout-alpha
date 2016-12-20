import React from 'react';
import firebase from 'firebase';

const app = firebase.initializeApp({apiKey: 'AIzaSyBADGH-KXqmKHxn6ZVJr3XcpV5MLYK4XRM', authDomain: 'workout-alpha.firebaseapp.com', databaseURL: 'https://workout-alpha.firebaseio.com', storageBucket: 'workout-alpha.appspot.com', messagingSenderId: '873329747843'});

const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log(user.displayName, '| is still signed in');
    } else {
        // No user is signed in.
        console.log('no user is signed in');
    }
});

console.log(app);

class App extends React.Component {
    constructor() {
        super();
    }

    login() {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log(user);
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    logout() {

    }

    render() {
        return (
            <div>
                <div>What up world</div>
                <div>nah chill</div>
                <button onClick={this.login.bind(this)}>Login with google</button>
                <button>Logout</button>
            </div>

        );
    }
}

export default App;
