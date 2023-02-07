import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import { useLocation, useNavigate, Link} from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";



const Login = () => {
   const {myUser, signInWithGoogle, unRegister} = useFirebase();
   const [SignInWithEmailAndPassword, user, loading, error] =  useSignInWithEmailAndPassword(auth);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.state?.from?.pathname || "/";

   const handleFormSubmit = (event) =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    SignInWithEmailAndPassword(email, password);
}
   if(user){
    navigate(from, {replace:true});
   }
   if (myUser) {
    navigate(from, {replace:true});
  }
  return (
    <div className=" min-h-screen mt-24">
      {!myUser?.uid ? (
        <div>
           <form className="text-2xl bg-blue-100 p-5 rounded-lg shadow-lg w-1/2 m-auto" onSubmit={handleFormSubmit}>
          <div className="mt-7">
            <label className="text-right" htmlFor="email">Email:</label><br />
            <input className="border text-lg rounded-md pl-2" type="email" name="email" id="email" placeholder="Email" required/>
          </div>
          <div className="mt-7">
            <label className="text-right" htmlFor="password">Password:</label><br />
            <input className="border text-lg rounded-md pl-2" type="password" name="password" id="password" placeholder="Password" required/>
          </div>

          <input className="mt-5 cursor-pointer bg-blue-800 text-white p-2 rounded-lg" type="submit" value="Login" />
        </form>
          <div className="text-center">
          <p className="mt-5">or</p>
          <button
            onClick={signInWithGoogle}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-5"
          >
            Sign in with Google
          </button>
          <div className="mt-7">
        <p>New here? <Link className="text-[blue]" to='/signup'>Sign Up</Link></p>
      </div>
          </div>
        </div>
      ) : (
        <div className="mt-24 grid justify-items-center">
            <h1 className="text-[black] font-semibold text-2xl">Welcome <span className="text-red-400 uppercase">{myUser.displayName}</span></h1>
            <img className="rounded-full border" src={myUser.photoURL} alt="" />
            <button className="mt-2 border bg-slate-200 hover:bg-slate-300 font-semibold rounded-md p-2" onClick={unRegister}>Sign Out</button>
        </div>
      )}

      
    </div>
  );
};

export default Login;
