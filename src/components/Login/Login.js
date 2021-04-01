import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../Configs/firebase.config"
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

 
 
 !firebase.apps.length &&firebase.initializeApp(firebaseConfig)

const Login = () => {
   const history = useHistory()
   const location = useLocation()
   let {from} = location.state || {from : {pathname:"/"}}
const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const  provider = new firebase.auth.GoogleAuthProvider();
    const handleSignInWithGoogle = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          const  user = result.user;
          const newUser = {name:"",email:""}
          newUser.name =  user.displayName;
          newUser.email = user.email;
          setLoggedInUser(newUser)
          history.replace(from)
          console.log(user);
      
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const  errorCode = error.code;
          const  errorMessage = error.message;
          // The email of the user's account used.
          const  email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const  credential = error.credential;
          console.log(errorMessage);
          // ...
        });
    }
    
    return (
        <div>
           <button onClick={handleSignInWithGoogle}>log with google</button>
        </div>
    );
};

export default Login;