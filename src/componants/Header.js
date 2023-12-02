import { onAuthStateChanged, signOut } from "firebase/auth";
import { Auth } from "../utills/firebase";
import { removeUserInfo, userInfo } from "../utills/userSlicer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Netflix_logo } from "../utills/constants";

const Header = () => {
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
        navigate("/browser");
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
    signOut(Auth)
      .then(() => {
        dispatche(removeUserInfo());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" w-screen relative z-20">
        <div className="flex justify-between ">
          <img
            className="w-32 h-20 "
            src={Netflix_logo}
            alt="Netflix Logo"
            size={30}
          />

          <div className="flex ">
            {" "}
            <h1 className="my-7 mr-5 font-semibold text-white">
              {userDetails?.diplayname}
            </h1>
            <button
              className="mr-10 font-semibold text-red-800"
              onClick={LogOut}
            >
              SignOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
