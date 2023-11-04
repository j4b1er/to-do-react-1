import { useState } from "react";

export default function InputItem({ onSetDataSubmit }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length === 0) return;

    setName(e.target.value);

    const id = crypto.randomUUID();

    const newItem = {
      id,
      name,
      checked: false,
    };

    onSetDataSubmit(newItem);
    setName("");
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add New"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
