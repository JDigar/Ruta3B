import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
    
  }

  return (
    <div className="container text-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 content-center">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email address"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className=" container mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label ms-2" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br />
        <Link to="/">
          <button className="btn btn-primary mt-3">Back home</button>
        </Link>
      </form>
    </div>
  );
};
