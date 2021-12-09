// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getPerformance } from 'firebase/performance'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC0BwSQWmUDj4fYHAm6-tGWn6aSsmy0T5g',
  authDomain: 'stadjatten-wp.firebaseapp.com',
  projectId: 'stadjatten-wp',
  storageBucket: 'stadjatten-wp.appspot.com',
  messagingSenderId: '539379431414',
  appId: '1:539379431414:web:2897cd46a46454a652f9d7',
  measurementId: '${config.measurementId}'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const perf = getPerformance(app)

export { analytics, perf }
