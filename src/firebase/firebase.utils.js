import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwIrr7bKS_UvOd2Z1uneo7FVIA7y4S3e8",
    authDomain: "wedding-site-52739.firebaseapp.com",
    databaseURL: "https://wedding-site-52739.firebaseio.com",
    projectId: "wedding-site-52739",
    storageBucket: "wedding-site-52739.appspot.com",
    messagingSenderId: "346356746167",
    appId: "1:346356746167:web:6df831a2bc5b5fb6a60a32"
}

export const createSongRequestDocument = async (additionalData) => {
    if(!additionalData) return;
    // const songRef = firestore.doc(`songs/124`);
    let songRef = firestore.collection('songs')
    // const snapShot = await songRef.get();

    // if(!snapShot.exists){
    const {artist, title} = additionalData;
    const createdAt = new Date();

    try{
        await songRef.add({
            artist,
            title,
            createdAt
        })
    } catch (error) {
        console.log("Error adding song", error.message);
    }
    // }

    return songRef;
    // console.log(snapShot);
}

firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
