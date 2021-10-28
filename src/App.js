import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([]);

  // Add an item
  const addItem = (item) => {
    // creating a new id for the new item to add
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id, ...item };
    // adding the new item to the list
    setItems([...items, newItem]);
  };

  // Delete an item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <AddItem onAdd={addItem} />
      {items.length > 0 ? (
        <Items items={items} onDelete={deleteItem} />
      ) : (
        "No items to show"
      )}
    </div>
  );
}

export default App;
