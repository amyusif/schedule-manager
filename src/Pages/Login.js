import React from "react";
import log from "../Assets/hu.png";
import Auth from "../Components/Auth";
import LoginHeader from "../Components/LoginHeader";
import Form from "../Components/Form";

const Login = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="left">
          <div className="left-cont">
            <img src={log} alt="" />
            <h5>Connect with millions of Employees Accross the world</h5>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
          <LoginHeader />
            <Form />
            <div className="authentication">
            <p>Or Continue with:</p>
            <div className="auth">
              <Auth id="google" name="Google" />
              <Auth id="linkedin" name="LinkedIn"  />
            </div>
            <p>Don't have an Account? Create one here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
