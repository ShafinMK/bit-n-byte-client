import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../firebase/firebase.initializeAuth";


initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isloading, setIsloading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const googleSignin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);

                // The signed-in user info.
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);


            });
    }
    // on auth state change 
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              
            } else {
              setUser({})
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
    return { user, error, googleSignin, logOut };

}

export default useFirebase;