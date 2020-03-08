import firebase from 'firebase'
import {firebaseConfig} from './secrets'

class Fire {
  constructor() {
    this.init()
  }

  // initialize app
  init = () => firebase.initializeApp(firebaseConfig)

  // get current user id
  uid = () => (firebase.auth().currentUser.uid || null)

  // sign up new user
  signup = async (email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        return error
    }
  }

  // login an existing user
  login = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        return error
    }
  }

  createProfile = async (name, kosher, shabbat) => {
    try {
      const userId = this.uid()
      const refToUser = firebase.database().ref('users').child(userId)
      refToUser.set({ name, kosher, shabbat })
    }
    catch (error) {
      return error
    }
  }

  // turn off firebase connection
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire()
export default Fire