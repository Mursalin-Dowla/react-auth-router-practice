import { useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase.init';


const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [myUser, setMyUser] = useState({});

    const signInWithGoogle = ()=>{
     signInWithPopup(auth, googleProvider)
     .then(result=>{
        const myUser = result.myUser;
        console.log(myUser);
        setMyUser(myUser);
     })
    }
    const unRegister = ()=>{
        signOut(auth)
        .then(()=>{
            console.log('signed out succefully')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, myUser=>{
            setMyUser(myUser);
        })
    },[])
    return {myUser, signInWithGoogle, unRegister}
};

export default useFirebase;