import React from "react";
import Test from "../Components/test";
import { Styledbtn } from "./Styled-Components/StyledList.styled";

const Form = () => {
  return (
    <form action="" method="post" className="form">
      <Test name="Eamil Address" type="email" />
      <Test name="Password" type="password" />
      <div className="fg-pass"><a href="/">
        Forgot Password?
      </a></div>
      <Styledbtn width='332px'>Login</Styledbtn>
    </form>
  );
};

export default Form;
