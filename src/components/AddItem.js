import React, { useState } from "react";
import Button from "./Button";

const AddItem = ({ onAdd }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ text });
    setText("");
  };

  return (
    <form className="add-item" onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add Item"
        onChange={(e) => setText(e.target.value)}
      />
      <Button />
    </form>
  );
};

export default AddItem;
