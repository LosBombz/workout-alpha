import React from 'react';
import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyBADGH-KXqmKHxn6ZVJr3XcpV5MLYK4XRM',
    authDomain: 'workout-alpha.firebaseapp.com',
    databaseURL: 'https://workout-alpha.firebaseio.com',
    storageBucket: 'workout-alpha.appspot.com',
    messagingSenderId: '873329747843'
});

console.log(app);

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>What up world</div>
                <div>nah chill</div>
            </div>

        );
    }
}

export default App;
