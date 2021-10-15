import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import { auth, provider } from "../../firebase/firebase";
import "./Login.css";

function Login() {
    const dispatch = useDispatch();
    
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://i2.wp.com/businesspost.ng/wp-content/uploads/2021/09/Gmail.jpg?resize=768%2C432&ssl=1"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
