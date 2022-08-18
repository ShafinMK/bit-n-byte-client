import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../firebase/firebase.initializeAuth";


initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isloading, setIsloading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //google sign in 
    const googleSignin = () => {
       return signInWithPopup(auth, googleProvider);
            
    }
    //sign in existing user
    const userSignin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //create new user with email and pass
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //update user name 
    const updateUser = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    // on auth state change 
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              setIsloading(false);
              
            } else {
              setUser({});
              setIsloading(false);
            }
          });
    }, []);

    //sign out 
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('user logged out');
        }).catch((error) => {
            // An error happened.
        });
    }
    return { user, error, setUser, setError, isloading, setIsloading, googleSignin, logOut, createUser, updateUser, userSignin };

}

export default useFirebase;