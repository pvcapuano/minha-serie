import React, { useState } from "react";
import useSignup from "@/hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };
  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>email:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit">sign up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
