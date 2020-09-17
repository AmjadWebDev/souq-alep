import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div className="menu-item">
      <div
        className="backgroun-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span></span>
      </div>
    </div>
  );
};

export default MenuItem;