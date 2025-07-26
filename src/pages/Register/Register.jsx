import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottieData from "../../assets/Lottie/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // TODO: Password Validation
    // TODO: Show Password validation error

    createUser(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/3">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center mt-4">Register Now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <div>
                <p>
                  Have an account?{" "}
                  <span className="">
                    <Link to="/signIn" className="link link-hover">
                      Sign In.
                    </Link>
                  </span>
                </p>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
