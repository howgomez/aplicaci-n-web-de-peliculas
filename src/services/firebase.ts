import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKwF2Ou5Pi_JjKrxQzXttXOBXQh5fO6C0',
  authDomain: 'app-movie-73d9d.firebaseapp.com',
  projectId: 'app-movie-73d9d',
  storageBucket: 'app-movie-73d9d.appspot.com',
  messagingSenderId: '802172732621',
  appId: '1:802172732621:web:3f2f69afef7a54a0e71584'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
