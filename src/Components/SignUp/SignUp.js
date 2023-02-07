import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
  return (
    <div className="min-h-screen mt-20 text-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-[blue]">Please Register</h1>
      </div>
      <div className="mt-14 text-left">
        <form className="text-2xl bg-blue-100 p-5 rounded-lg shadow-lg w-1/2 m-auto" onSubmit={handleFormSubmit}>
          <div className="mt-7">
            <label className="text-right" htmlFor="name">Your Name:</label><br />
            <input className="border text-lg rounded-md pl-2" type="text" name="name" id="name" placeholder="Name"  required/>
          </div>
          <div className="mt-7">
            <label className="text-right" htmlFor="email">Email:</label><br />
            <input className="border text-lg rounded-md pl-2" type="email" name="email" id="email" placeholder="Email" required/>
          </div>
          <div className="mt-7">
            <label className="text-right" htmlFor="password">Password:</label><br />
            <input className="border text-lg rounded-md pl-2" type="password" name="password" id="password" placeholder="Password" required/>
          </div>
          <div className="mt-7">
            <label className="text-right" htmlFor="password">Re-enter Password:</label><br />
            <input className="border text-lg rounded-md pl-2" type="password" name="password" id="password" placeholder="Re-enter password"  required/>
          </div>

          <input className="mt-5 cursor-pointer bg-blue-800 text-white p-2 rounded-lg" type="submit" value="Register" />
        </form>
      </div>
      <div className="mt-7">
        <p>Already have an account? <Link className="text-[blue]" to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
