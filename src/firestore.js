import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA-TukYN-dT2K2x3Lv6inEDyerEdHayQmA',
  authDomain: 'movie-ontology.firebaseapp.com',
  databaseURL: 'https://movie-ontology.firebaseio.com',
  projectId: 'movie-ontology',
  storageBucket: 'movie-ontology.appspot.com',
  messagingSenderId: '361757243026',
  appId: '1:361757243026:web:60e5fcc1582bb07c94184b',
  measurementId: 'G-2TK53656L9',
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

export default firestore;
