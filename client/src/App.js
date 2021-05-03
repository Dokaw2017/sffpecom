import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp2 from "./pages/SignUp2";
import Login from "./pages/Login";
import Profile from "./Components/Profile";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import SinglePost from "./pages/SinglePost";
import UpdatePost from "./UpdatePost";
import Payement from "./StripeCheckout";

const App = () => {
  return (
    <div className="APP">
      <Router>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/profile" component={Profile} />
            <Route path="/signup" component={SignUp2} />
            <Route path="/login" component={Login} />
            <Route path="/update/:id" component={UpdatePost} />
            <Route path="/posts/:postId" component={SinglePost} />
            <Route path="/payment" component={Payement} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
