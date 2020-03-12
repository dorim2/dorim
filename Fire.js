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

  createProfile = async (name, kosher, shabbat, gender) => {
    try {
      const userId = this.uid()
      const refToUser = firebase.database().ref('users').child(userId)
      refToUser.set({ name, kosher, shabbat, gender })
    }
    catch (error) {
      return error
    }
  }

  // create a new apartment / room listing
  createListing = async (kosher, shabbat, gender, roomType, bio) => {
    try {
      const userId = this.uid()
      firebase.database().ref('listings').push({kosher, shabbat, gender, roomType, bio, userId})
    } catch (error) {
      return error
    }
  }

  // get all available room listing from database
  getRooms = async (callback) => {
    try {
      firebase.database().ref('listings').on('child_added', room => {
        const roomInfo = Object.values(room.val())
        roomInfo.id = Object.keys(room)[0]
        callback(roomInfo)
      })
    } catch (error) {
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