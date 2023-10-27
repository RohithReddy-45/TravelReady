import { useState } from "react";

export default function Form({ onAddItem }) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemDescription, setItemDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemDescription) return;

    const newItem = {
      itemDescription,
      itemQuantity,
      packed: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setItemDescription("");
    setItemQuantity(1);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select
        value={itemQuantity}
        onChange={(e) => setItemQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item name..."
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <button>Add item</button>
    </form>
  );
}
