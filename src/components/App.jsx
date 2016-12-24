import _ from 'lodash';
import React from 'react';
import firebase from 'firebase';

const app = firebase.initializeApp({apiKey: 'AIzaSyBADGH-KXqmKHxn6ZVJr3XcpV5MLYK4XRM', authDomain: 'workout-alpha.firebaseapp.com', databaseURL: 'https://workout-alpha.firebaseio.com', storageBucket: 'workout-alpha.appspot.com', messagingSenderId: '873329747843'});

const provider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            authenticated: false,
            currentUser: null
        }

        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                // User is signed in.
                console.log(user.displayName, '| is still signed in');
                this.setState({
                    authenticated: true,
                    currentUser: user
                });
                this.getExercises();
            } else {
                // No user is signed in.
                console.log('no user is signed in');
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    exercises: []
                });
            }
        });
    }

    getExercises() {
        return firebase.database().ref('/exercises/').once('value').then((snapshot)=> {
            let res = snapshot.val();
            _.forEach(res, (exercise, idx)=> {
                this.state.exercises.push(
                    <li key={idx}>
                        <h2>{exercise.name}</h2>
                        <div>type: {exercise.type}</div>
                    </li>
                );
            });
            console.log(this.state.exercises);

            this.setState({
                exercises: this.state.exercises
            });
        });
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
        firebase.auth().signOut().then(function() {
            console.log('successfuly logged out');
            // Sign-out successful.
        }, function(error) {
            console.error(error);
            // An error happened.
        });
    }

    render() {
        let authButton = this.state.authenticated ? <button onClick={this.logout.bind(this)}>Logout</button> : <button onClick={this.login.bind(this)}>Login with google</button>;
        return (
            <div className="contrainer">
                <h1>Workout Alpha</h1>
                <h2>Exercises</h2>
                {authButton}
                <ul>
                    {this.state.exercises}
                </ul>

            </div>

        );
    }
}

export default App;
