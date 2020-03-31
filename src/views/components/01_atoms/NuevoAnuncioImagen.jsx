import React, { useState } from "react";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const NuevoAnuncioImagen = () => {
  const [image, setImage] = useState("");

  const demo = event => {
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
