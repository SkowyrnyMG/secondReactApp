// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDtKLl_TdHgbpDDi0zKOfJU5fe30bYBsIE',
  authDomain: 'advblogv2.firebaseapp.com',
  databaseURL: 'https://advblogv2.firebaseio.com',
  projectId: 'advblogv2',
  storageBucket: 'advblogv2.appspot.com',
  messagingSenderId: '802604390665',
  appId: '1:802604390665:web:1143e3e55f10ce5857dbd8',
  measurementId: 'G-YC8GREWSYY',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();
export default firebase;
