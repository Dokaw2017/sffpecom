import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "semantic-ui-react";
import Home from "./pages/Home";
import MenuBar from "./Components/MenuBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Upload } from "./Upload";
import SignUp2 from "./pages/SignUp2";
import Login from "./pages/Login";
import Profile from "./Components/Profile";
import LogoutButton from "./Components/Logout";

const App = () => {
  return (
    <div className="APP">
      <Router>
        <Container>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post" component={Upload} />
            <Route path="/profile" component={Profile} />
            <Route path="/signup" component={SignUp2} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={LogoutButton} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
