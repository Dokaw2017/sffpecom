import { useState } from "react";

const SignUp2 = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I am clicked");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp2;
