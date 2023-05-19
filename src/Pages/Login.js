import React from "react";
import bg from "../Assets/clouds.jpg";
import log from "../Assets/hu.png";
import LoginHeader from "../Components/LoginHeader";
import Form from "../Components/Form";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import {
  Styledcard,
  Wrapper,
  Button2,
  Allign
} from "../Components/Styled-Components/StyledList.styled";

const Login = () => {
  return (
    <Wrapper background={bg}>
      <Styledcard width="70" height="70">
        <div className="left">
          <div className="left-cont">
            <img src={log} alt="" />
            <h5 id="h5">
              Discover and know how to schedule meeting with your clients
            </h5>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <LoginHeader />
            <Form />
            <div className="bottom">
              <div className="or">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
              </div>
              <div className="auth">
                <Button2 id="linkedin" className="">
                  <Allign>{<FcGoogle />} Google</Allign>
                </Button2>
                <Button2 id="linkedin">
                 <Allign>{<BsLinkedin color="#1877f2" />} LinkedIn</Allign> 
                </Button2>
              </div>
              <p id="create">
                Don't have an Account? <a href="/">Create one here</a>
              </p>
            </div>
          </div>
        </div>
      </Styledcard>
    </Wrapper>
  );
};

export default Login;
