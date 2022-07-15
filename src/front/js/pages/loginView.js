import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginView = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.prevent.default();
  };

  return (
    <div className="container text-center">
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
      <button
        onClick={() => {
          actions.login(email, password);
          navigate("/usuario");
        }}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
      <br />
      <Link to="/">
        <button className="btn btn-primary mt-3">Back home</button>
      </Link>
    </div>
  );
};
