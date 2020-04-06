import React, { useState } from "react";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import axios from "axios";

const NuevoAnuncioImagen = () => {
  const [image, setImage] = useState("");

  const demo = (event) => {
    /**
     * ENVIAR IMAGEN A /api/upload-image"
     */
    // const __dirname = path.resolve();
    console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    axios.post("/api/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("ahi vaa");

    /**
     * PREVIZUALIZAR IMAGEN EN DIV
     */
    // const selectedFile = URL.createObjectURL(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
    document.getElementById("imagenNueva").src = image;
  };

  return (
    <div className="div-images__image">
      <div className="div-images__image--photo">
        {image ? (
          <img id="imagenNueva" src={image} alt="" />
        ) : (
          <label for="demoo" style={{ cursor: "pointer" }}>
            <AddAPhotoIcon style={{ fontSize: "3em" }} />
          </label>
        )}
      </div>
      <input
        id="demoo"
        type="file"
        onChange={demo}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default NuevoAnuncioImagen;
