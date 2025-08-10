import React from "react";
function Image ({ image, name }) {
  return <img className="image" src={image} alt={name} style={{ width: "200px" }} />;
}
export default Image;