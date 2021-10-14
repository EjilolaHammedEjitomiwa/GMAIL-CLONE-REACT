import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";

function App() {
  return (
    <Router>
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
      </div>
    </Router>
  );
}

export default App;

// 4:09:46
