import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../Authentication/base";
import "../Styles/signin.scss";

function SignUp() {
  function createNewAccont() {
    console.log("Create new accont");
  }
  function handleSignUp() {
    console.log("handel SignUp");
  }

  return (
    <div className="signin-page">
      <div className="signin-form">
        <form onSubmit={handleSignUp}>
          <h2 for="signin" className="mt-4">
            Sign Up
          </h2>
          <div className="form-group mt-4">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group mt-4">
            <label for="exampleInputPassword1">Type Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small id="emailHelp" className="form-text text-muted">
              Please do your best to create unique password.
            </small>
          </div>

          <button type="submit" className="btn btn-primary mt-5">
            Create Accont
          </button>
          <div className="new-account mt-4 mb-2 ">
            <a href="/login"> Log in with existing account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
