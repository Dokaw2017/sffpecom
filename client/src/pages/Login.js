import { useState, useContext } from "react";
import { Form, Button } from "semantic-ui-react";
import { useLazyQuery } from "@apollo/react-hooks";
import { LOGIN_USER } from "../graphql/query";
import { useForm } from "../hooks/Hooks";
import { Redirect } from "react-router";
import { AuthContext } from "../context/auth";

const Login = (props) => {
  /* const context = useContext(AuthContext);
  console.log(context); */
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading, data }] = useLazyQuery(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      console.log("userData", userData);
      /*  context.login(userData); */
      props.history.push("/");
    },
    variables: values,
  });
  if (data) {
    window.localStorage.setItem("token", data.loginUser.token);
    props.history.push("/");
  }
  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} className={loading ? "loading" : ""}>
        <h1>Login</h1>
        <Form.Input
          label="Username"
          placeholder="Username"
          name="username"
          value={values.username}
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
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
