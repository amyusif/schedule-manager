import React from "react";
import log from "../Assets/hu.png";
import Test from "../Components/test";
import Button from "../Components/Button";
import { AiOutlineLogin } from "react-icons/ai";

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
        <div className="field">
        <Test name='EMAIL' type="email" placeholder='Email' />
        </div>
        <div className="field">
        <Test name='PASSWORD' type="password" placeholder='Password...' />
        </div>
        <div className="btn">
        <Button type='submit' button='LOGIN' icon={<AiOutlineLogin/>}/>
        </div>
        <h4>Forgot Password?</h4>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;