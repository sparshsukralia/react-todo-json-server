import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    };
    getItems();
  }, []);

  // Fetch items
  const fetchItems = async () => {
    const res = await fetch("http://localhost:5000/items");
    const data = await res.json();
    return data;
  };

  // Add an item
  const addItem = async (item) => {
    const res = await fetch(`http://localhost:5000/items`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await res.json();

    setItems([...items, data]);

    // // creating a new id for the new item to add
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newItem = { id, ...item };
    // // adding the new item to the list
    // setItems([...items, newItem]);
  };

  // Delete an item
  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`, {
      method: "DELETE",
    });

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
