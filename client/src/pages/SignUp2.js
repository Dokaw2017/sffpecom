import { useState } from "react";
import "../App.css";
import { Form, Button } from "semantic-ui-react";
import { ApolloError, useMutation } from "@apollo/react-hooks";
import { REGISTER_NEW_USER } from "../graphql/mutation";
import { useForm } from "../hooks/Hooks";

const Signup = (props) => {
  //const [error, setError] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatarImage: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_NEW_USER, {
    update(_, result) {
      console.log(result);
      props.history.push("/");
    },
    /*  onError(error) {
      console.log(error.graphQLErrors[0].extensions.exception.error);
      setError(error.graphQLErrors[0].extensions.exception.error);
    }, */
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
          label="FirstName"
          placeholder="Firstname"
          name="firstName"
          value={values.firstName}
          onChange={onChange}
        />
        <Form.Input
          label="Lastname"
          placeholder="Lastname"
          name="lastName"
          value={values.lastName}
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
        <Form.Input
          label="AvatarImage"
          placeholder="AvatarImage"
          name="avatarImage"
          value={values.avatarImage}
          onChange={onChange}
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
      {/* <div className="ui error message">
        <ul className="list">
          {Object.values(error).length > 0 && (
            <div className="ui error message">
              <ul className="list">
                {Object.values(error).map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          )}
        </ul>
      </div> */}
    </div>
  );
};

export default Signup;
