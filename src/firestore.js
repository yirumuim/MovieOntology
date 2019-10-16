import firebase from 'firebase';
import config from './configuration';

firebase.initializeApp(config);

const firestore = firebase.firestore();

export default firestore;
