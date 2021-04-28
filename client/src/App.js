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
import { AuthProvider } from "./context/auth";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="APP">
      <AuthProvider>
        <Router>
          <Container>
            {/* <MenuBar /> */}
            <Navbar />
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/" component={Products} />
              <Route path="/post" component={Upload} />
              <Route path="/profile" component={Profile} />
              <Route path="/signup" component={SignUp2} />
              <Route path="/login" component={Login} />
            </Switch>
          </Container>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
