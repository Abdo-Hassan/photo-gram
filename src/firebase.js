import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCcaFb6MQZOwIDreqYXfSB5MIAQmhRGxqw',
  authDomain: 'photogram-f7bcb.firebaseapp.com',
  databaseURL: 'https://photogram-f7bcb.firebaseio.com',
  projectId: 'photogram-f7bcb',
  storageBucket: 'photogram-f7bcb.appspot.com',
  messagingSenderId: '929398070307',
  appId: '1:929398070307:web:b43da926ec8799da802596',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
