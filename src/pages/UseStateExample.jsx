import React, { useState } from 'react';

function UseStateExample() {
  // Example 1: Simple Counter
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  // Example 2: Toggle Boolean State
  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(prev => !prev);

  // Example 3: Controlled Form Input
  const [name, setName] = useState('');
  const handleNameChange = (e) => setName(e.target.value);

  // Example 4: Array State
  const [items, setItems] = useState([]);
  const addItem = () => setItems([...items, `Item ${items.length + 1}`]);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">useState Examples</h1>

      {/* Section 1: Simple Counter */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Simple Counter</h2>
        <p className="text-gray-700 mb-4">
          This example uses useState to maintain a counter. Click the button to increment the count.
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-xl">Count: {count}</span>
          <button
            onClick={increment}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Increment
          </button>
        </div>
      </section>

      {/* Section 2: Toggle Boolean State */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Toggle Boolean State</h2>
        <p className="text-gray-700 mb-4">
          In this example, we toggle a boolean state to display "ON" or "OFF".
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-xl">State: {isToggled ? "ON" : "OFF"}</span>
          <button
            onClick={toggle}
            className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
          >
            Toggle
          </button>
        </div>
      </section>

      {/* Section 3: Controlled Input */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Controlled Form Input</h2>
        <p className="text-gray-700 mb-4">
          This example demonstrates a controlled input field where the component's state holds the input value.
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <p className="mt-2 text-gray-600">Current Value: {name}</p>
      </section>

      {/* Section 4: Array State */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Array State Example</h2>
        <p className="text-gray-700 mb-4">
          Here we manage an array using useState. Click the button to add a new item.
        </p>
        <button
          onClick={addItem}
          className="mb-4 py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-300"
        >
          Add Item
        </button>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-gray-800">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default UseStateExample;
