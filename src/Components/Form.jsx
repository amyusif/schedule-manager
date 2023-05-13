import React from "react";
import Button from "../Components/Button";
import Test from "../Components/test";

const Form = () => {
  return (
    <form action="" method="post" className="form">
      <Test name="Eamil Address" type="email" />
      <Test name="Password" type="password" />
      <a href="/" className="fg-pass">
        Forgot Password?
      </a>
      <Button name="Login" type="submit" />
    </form>
  );
};

export default Form;
