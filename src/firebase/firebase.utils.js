import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCwcZ3lt8Sgc2Kgv243KCuvtDWZxfPnqg4",
  authDomain: "crwn-db-58b83.firebaseapp.com",
  databaseURL: "https://crwn-db-58b83.firebaseio.com",
  projectId: "crwn-db-58b83",
  storageBucket: "",
  messagingSenderId: "404040585019",
  appId: "1:404040585019:web:9dc46f84ef0a01ee"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select account' });
export const signInWithGoogle = () => auth.signInWithPopup();

export default firebase;
