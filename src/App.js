import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Buy milk",
    },
    {
      id: 2,
      text: "Buy apples",
    },
    {
      id: 3,
      text: "Buy oats",
    },
  ]);

  // Delete an item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <AddItem />
      <Items items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
