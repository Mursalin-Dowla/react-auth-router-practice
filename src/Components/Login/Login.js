import React from "react";
import useFirebase from "../../Hooks/useFirebase";



const Login = () => {
   const {user, signInWithGoogle, unRegister} = useFirebase();
  return (
    <div className="text-center min-h-screen">
      {!user?.uid ? (
        <div>
          <form className="mt-24">
            <label htmlFor="name">Your Name</label>
            <input className="border" type="text" name="name" id="name" />
          </form>
          <p className="mt-5">or</p>
          <button
            onClick={signInWithGoogle}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-5"
          >
            Sign in with Google
          </button>
        </div>
      ) : (
        <div className="mt-24 grid justify-items-center">
            <h1 className="text-[black] font-semibold text-2xl">Welcome <span className="text-red-400 uppercase">{user.displayName}</span></h1>
            <img className="rounded-full border" src={user.photoURL} alt="" />
            <button className="mt-2 border bg-slate-200 hover:bg-slate-300 font-semibold rounded-md p-2" onClick={unRegister}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Login;
