import React from "react";

import "../styles/tiles.scss";
import "../styles/modal.scss";

const Tile = data => (
  <div className="tile">
    <img
      style={{
        height: "15vw",
        objectFit: "cover",
        width: "15vw"
      }}
      src={require("../images/experience/" + data.data.url)}
      alt={data.data.name}
    />
  </div>
);

const Tiles = images => (
  <div className="tiles">
    {images.data.map(data => {
      return <Tile data={data} key={data.id} />;
    })}
  </div>
);

export default Tiles;
