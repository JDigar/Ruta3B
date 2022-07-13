import React, { useState } from "react";
import { Link } from "react-router-dom";

const CargaDeFoto = () => {
  const [uploadImages, setUploadImages] = useState("");

  return (
    <div className=" container text-center mt-5">
      <div className="btn-foto mb-3">
        <input
          className="form-control input-foto bg-primary text-white"
          type="file"
          id="formFile"
          onChange={(e) => setUploadImages(e.target.files[0])}
        ></input>
      </div>

      <button
        className="btn btn-primary"
        variant="contained"
        onClick={(e) => actions.uploadFile(uploadImages)}
      >
        Subir Foto
      </button>
    </div>
  );
};

export default CargaDeFoto;
