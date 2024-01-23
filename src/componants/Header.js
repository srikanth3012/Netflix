import { onAuthStateChanged, signOut } from "firebase/auth";
import { Auth } from "../utills/firebase";
import { removeUserInfo, userInfo } from "../utills/userSlicer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Netflix_logo } from "../utills/constants";

const Header = () => {
  const [isSign, setIsSign] = useState(false);
  const navigate = useNavigate();
  const dispatche = useDispatch();
  const userDetails = useSelector((store) => store?.user);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatche(
          userInfo({
            uid: uid,
            email: email,
            diplayname: displayName,
            photoURL: photoURL,
          })
        );
        setIsSign(true);
        navigate("/");
        // ...
      } else {
        // User is signed out
        // ...
        dispatche(removeUserInfo());
        // navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const LogOut = () => {
    setIsSign(false);
    signOut(Auth)
      .then(() => {
        dispatche(removeUserInfo());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const SignInHandler = () => {
    navigate("/LogIn");
  };
  const searchHandler = () => navigate("/search");

  return (
    <>
      <div className=" w-screen fixed z-10">
        <div className="flex justify-between bg-black bg-opacity-80 shadow-2xl">
          <img
            className="w-40 h-20 mt-3 ml-3"
            src={Netflix_logo}
            alt="Netflix Logo"
          />

          <div className="flex ">
            {" "}
            <h1 className=" mr-7 my-7 font-semibold text-red-800 text-2xl">
              {userDetails?.diplayname}
            </h1>
            <button
              className="my-7 mr-7 font-bold text-red-800 bg-white px-3 py-1.5 rounded-lg "
              onClick={searchHandler}
            >
              Search
            </button>
            {isSign ? (
              <div>
                <button
                  className="mr-10 font-bold text-red-800 bg-white px-3 my-7 py-2 rounded-lg"
                  onClick={LogOut}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="mr-10 font-bold text-red-800 bg-white px-3 my-7 py-1 rounded-lg"
                  onClick={SignInHandler}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
