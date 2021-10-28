import React from "react";
import { FaTimes } from "react-icons/fa";

const Item = ({ item, onDelete }) => {
  return (
    <div className="item">
      <h4>{item.text}</h4>
      <FaTimes
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
};

export default Item;
