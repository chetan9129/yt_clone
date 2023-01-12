import React from "react";
import "../../css/loginScreen.css";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img src="./yt_logo.png" alt="" />
        <button>Login With Google</button>
        <p>This Project is made Using Youtube Data API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
