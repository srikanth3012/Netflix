import React, { useState } from "react";
import { useRef } from "react";
import Validation from "../utills/validation";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Auth } from "../utills/firebase";
import { Profile } from "../utills/constants";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [inValChec, setInValCheck] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const mail = useRef(null);
  const password = useRef(null);
  const Name = useRef(null);
  const navigate = useNavigate();

  function isValid() {
    const message = Validation(mail.current.value, password.current.value);
    setInValCheck(message);

    if (!message === null) return null;

    function userLogIn(userCredential) {}
    if (isSignUp) {
      createUserWithEmailAndPassword(
        Auth,
        mail.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          updateProfile(Auth.currentUser, {
            displayName: Name.current.value,
            photoURL: Profile,
          })
            .then(() => {
              navigate("/browser");
              userLogIn(userCredential);
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setInValCheck(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        Auth,
        mail.current.value,
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browser");
          userLogIn(userCredential);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setInValCheck(errorCode + errorMessage);
        });
    }
  }
  function form() {
    return (
      <>
        <div className="pl-3 pr-4 m-4">
          <input
            ref={mail}
            type="text"
            placeholder="Email Address"
            className=" w-3/4 bg-gray-800 pl-2 h-12 rounded-lg"
          />
        </div>

        <div className="pl-3 pr-4 m-4">
          <input
            ref={password}
            type="Password"
            placeholder="password"
            className=" w-3/4  bg-gray-800 pl-2 h-12 rounded-lg"
          />
        </div>
        <div className="text-base font-semibold text-red-700">{inValChec}</div>
        <div className="pl-4 pr-4 m-4">
          <button
            className="text-sm w-3/4 bg-red-600 h-12 mt-4 rounded-lg hover:bg-red-900"
            onClick={isValid}
          >
            Sign In
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      {/* className="absolute z-30 w-40 mx-10 my-10" */}
      <div className="absolute z-30 w-40 mx-10 my-10">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
        />
      </div>
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Wallpaper-Netflixz"
        />
      </div>
      <div className="absolute w-screen h-screen bg-black bg-opacity-60"></div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className={`w-[400px] h-[500px] bg-black  rounded-lg bg-opacity-80 absolute my-28 mx-[500px] right-0 left-0 text-white`}
      >
        {!isSignUp ? (
          <>
            <h1 className="text-4xl mt-10 font-bold justify-start">Sign In</h1>
            {form()}
            <div className="flex">
              <h1 className="pl-24">Create New Account </h1>
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                }}
                className="ml-2 text-red-700 font-semibold"
              >
                {" "}
                Sign Up
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl  font-bold mt-2 pt-2">Create Account</h1>
            <div className="pl-3 pr-4 m-4">
              <input
                ref={Name}
                type="text"
                placeholder="Enter Full Name"
                className=" w-3/4 bg-gray-800 pl-2 h-12 rounded-lg"
              />
            </div>
            {form()}
          </>
        )}
      </form>
    </>
  );
};
export default LogIn;
