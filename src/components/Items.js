import React from "react";
import Item from "./Item";

const Items = ({ items, onDelete }) => {
  return (
    <>
      {items.map((item) => (
        <Item item={item} key={item.id} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Items;
