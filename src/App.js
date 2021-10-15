import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";
import SendMail from "./components/SendMail/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase/firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  let isGet = false;

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoUrl: userAuth.photoURL,
          })
        );
        isGet = true;
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      {isGet && !user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app_body">
            <Sidebar />

            <Switch>
              <Route exact path="/">
                <EmailList />
              </Route>

              <Route path="/mail">
                <Mail />
              </Route>
            </Switch>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;

// 5:42:10
