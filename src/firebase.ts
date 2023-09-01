import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: process.env.REACT_AP_API_KEY,
  authDomain: 'pos-data-35ed7.firebaseapp.com',
  projectId: 'pos-data-35ed7',
  storageBucket: 'pos-data-35ed7.appspot.com',
  messagingSenderId: '928509565897',
  appId: '1:928509565897:web:71cd117a0a271f2388e618',
  measurementId: 'G-N0L7TGNVFQ',
  databaseURL: 'https://posdata.firebaseio.com'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
const analytics = getAnalytics(app);
