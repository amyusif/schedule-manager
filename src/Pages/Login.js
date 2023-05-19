import React from "react";
import log from "../Assets/hu.png";
import Auth from "../Components/Auth";
import LoginHeader from "../Components/LoginHeader";
import Form from "../Components/Form";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { Styledcard } from "../Components/Styled-Components/StyledList.styled";




const Login = () => {
  return (
    <div className="main">
    <Styledcard width='70' height='70'>
        <div className="left">
          <div className="left-cont">
            <img src={log} alt="" />
            <h5 id="h5">Discover and know how to schedule meeting with your clients </h5>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
          <LoginHeader />
            <Form />
            <div className="authentication">
            <div className="or">
            <div className="line"></div>
            <p>or</p>
            <div className="line"></div>
            </div>
            <div className="auth">
              <Auth id="google" name="Google" icon={<FcGoogle size={20} />} />
              <Auth id="linkedin" name="LinkedIn"   icon={<BsLinkedin size={20} color="#1877f2"/>}/>
            </div>
            <p id="create">Don't have an Account? <a href="/">Create one here</a></p>
            </div>
          </div>
        </div>
        </Styledcard> 
    </div>
  );
};

export default Login;
