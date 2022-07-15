import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RegistroDeLocales from "../component/registroDeLocales";
import { Context } from "../store/appContext";

export const RegistroParaLocales = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-3">
      <RegistroDeLocales />
      <br />
      <Link to="/">
        <button className="btn btn-primary mt-4">Back home</button>
      </Link>
    </div>
  );
};
