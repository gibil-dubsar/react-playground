import React, { useState, useCallback } from 'react';

// Child component that receives a memoized callback
const ChildComponent = React.memo(({ handleClick, label }) => {
  console.log('ChildComponent rendered');
  return (
    <button 
      onClick={handleClick} 
      className="py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-300"
    >
      {label}
    </button>
  );
});

function UseCallbackExample() {
  // Section 1: Basic Callback Memoization for a Counter
  const [counter, setCounter] = useState(0);
  // Memoize the increment function so that its reference remains stable
  const increment = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  // Section 2: Callback with Dependencies
  const [multiplier, setMultiplier] = useState(2);
  // The multiply function depends on multiplier; it will update whenever multiplier changes
  const multiply = useCallback(() => {
    setCounter(prev => prev * multiplier);
  }, [multiplier]);

  // Section 3: Memoized Callback for Child Component
  const [message, setMessage] = useState("Hello");
  // showMessage is memoized so that its identity changes only when 'message' changes
  const showMessage = useCallback(() => {
    alert(message);
  }, [message]);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">useCallback Examples</h1>

      {/* Section 1: Basic Callback Memoization */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Basic Callback Memoization</h2>
        <p className="text-gray-700 mb-4">
          This example demonstrates memoizing a simple callback function that increments a counter.
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-xl">Counter: {counter}</span>
          <button 
            onClick={increment} 
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Increment
          </button>
        </div>
      </section>

      {/* Section 2: Callback with Dependencies */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Callback with Dependencies</h2>
        <p className="text-gray-700 mb-4">
          This example demonstrates using useCallback with a dependency array. The multiply callback multiplies the counter by a multiplier.
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-xl">Counter: {counter}</span>
          <button 
            onClick={multiply} 
            className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
          >
            Multiply
          </button>
        </div>
        <div className="mt-4">
          <input 
            type="number" 
            value={multiplier} 
            onChange={e => setMultiplier(Number(e.target.value))} 
            className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter multiplier"
          />
        </div>
      </section>

      {/* Section 3: Memoized Callback for Child Component */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Memoized Callback for Child Component</h2>
        <p className="text-gray-700 mb-4">
          In this example, we pass a memoized callback to a child component to prevent unnecessary re-renders.
        </p>
        <div className="flex items-center space-x-4">
          <ChildComponent handleClick={showMessage} label="Show Message" />
          <button 
            onClick={() => setMessage("Hello, updated message!")}
            className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-300"
          >
            Update Message
          </button>
        </div>
      </section>
    </div>
  );
}

export default UseCallbackExample;
