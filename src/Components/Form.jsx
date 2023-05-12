import React from "react";
import Button from "../Components/Button";
import Test from "../Components/test";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


const Form = () => {


  return (
    <form action="" method="post">
      <div className="field">
        <Test name="Eamil Address" type="email" placeholder="&#xf0e0;" />
      </div>
      <div className="field">
        <Test name="Password" type="password" />
        <a href="/" className="fg-pass">
          Forgot Password?
        </a>
      </div>
      <div className="butt">
        <Button button="LOGIN" />
      </div>
    </form>
  );
};

export default Form;
