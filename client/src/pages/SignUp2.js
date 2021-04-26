import { useState, useContext } from "react";
import "../App.css";
import { Form, Button } from "semantic-ui-react";
import { ApolloError, useMutation } from "@apollo/react-hooks";
import { REGISTER_NEW_USER } from "../graphql/mutation";
import { useForm } from "../hooks/Hooks";
import { AuthContext } from "../context/auth";

const Signup = (props) => {
  //const [error, setError] = useState({});

  // const context = useContext(AuthContext);

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_NEW_USER, {
    update(_, { data: { register: userData } }) {
      // context.login(userData);
      props.history.push("/");
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} className={loading ? "loading" : ""}>
        <h1>Register</h1>
        <Form.Input
          label="Username"
          placeholder="Username"
          name="username"
          value={values.username}
          onChange={onChange}
        />
        <Form.Input
          label="Email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
        <Form.Input
          label="Password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
