import React, { useState } from "react";
function Form({ todos, settodos }) {
  const [newItem, setItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    settodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
    setItem(" ");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="input">New Item</label>
        <input
          type="text"
          id="input"
          value={newItem}
          onChange={(event) => {
            setItem(event.target.value);
          }}
        />
      </div>
      <button className="btn">ADD</button>
    </form>
  );
}

export default Form;
