/* import React from "react";
import { Upload } from "./Upload";
import PostInput from "./Components/PostInputs";
import { Files } from "./Files";

function App() {
  return (
    <div>
      <Upload />
    </div>
  );
}

export default App;
 */

import "bootstrap/dist/css/bootstrap.min.css";
import LoginScreen from "./Components/LoginScreen";
import SignUp from "./Components/SignUp";
import LogOut from "./Components/LogoutScreen";
//import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Upload } from "./Upload";
import SignUp2 from "./Components/SignUp2";

function App() {
  return (
    <div className="APP">
      <Router>
        <Switch>
          <Route exact path="/" component={Upload} />
          {/* <Route path="/signup" component={SignUp} /> */}
          <Route path="/signup" component={SignUp2} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/logout" component={LogOut} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
