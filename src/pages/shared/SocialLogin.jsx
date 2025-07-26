import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { SignInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    SignInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex justify-center justify-items-center m-4">
      <button onClick={handleGoogleSignIn} className="btn ">
        <FaGoogle className="rounded-full"></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
