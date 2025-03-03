import React, { useState, useMemo } from 'react';

function UseMemoExample() {
  /* 
    Section 1: Expensive Calculation (Fibonacci)
    We compute the nth Fibonacci number using an expensive recursive function.
    The calculation is memoized so it only re-computes when 'fibInput' changes.
  */
  const [fibInput, setFibInput] = useState(10);
  // A simple recursive function to compute Fibonacci numbers
  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  // Memoize the Fibonacci result so it recalculates only when fibInput changes
  const fibResult = useMemo(() => {
    console.log("Calculating fibonacci...");
    return fibonacci(fibInput);
  }, [fibInput]);

  /* 
    Section 2: Derived Data from Array Filtering
    We maintain a list of items and filter them based on a search term.
    The filtered result is memoized to avoid re-filtering on every render.
  */
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState(['apple', 'banana', 'orange', 'grape', 'pineapple']);
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter(item => item.includes(searchTerm.toLowerCase()));
  }, [searchTerm, items]);

  /* 
    Section 3: Memoizing an Object for Dependency
    We create a style object that changes based on a counter.
    The style object is memoized so that its reference only updates when 'count' changes.
  */
  const [count, setCount] = useState(0);
  const memoizedStyle = useMemo(() => {
    return {
      backgroundColor: count % 2 === 0 ? 'lightblue' : 'lightgreen',
      padding: '10px',
      borderRadius: '4px'
    };
  }, [count]);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">useMemo Examples</h1>

      {/* Section 1: Expensive Calculation */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Expensive Calculation (Fibonacci)</h2>
        <p className="text-gray-700 mb-4">
          Calculate the nth Fibonacci number using an expensive recursive function. The result is memoized so it only recalculates when the input changes.
        </p>
        <div className="flex flex-col space-y-2">
          <input
            type="number"
            value={fibInput}
            onChange={(e) => setFibInput(Number(e.target.value))}
            className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <div className="text-xl">Fibonacci Result: {fibResult}</div>
        </div>
      </section>

      {/* Section 2: Derived Data from Array Filtering */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Filtering a List</h2>
        <p className="text-gray-700 mb-4">
          This example uses useMemo to filter a list of items based on a search term. The filtering logic runs only when the search term changes.
        </p>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search items..."
            className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <ul className="list-disc pl-5">
            {filteredItems.map((item, index) => (
              <li key={index} className="text-gray-800">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: Memoizing an Object for Dependency */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Memoized Style Object</h2>
        <p className="text-gray-700 mb-4">
          This example demonstrates using useMemo to create a memoized style object. The style changes based on the counter value.
        </p>
        <div style={memoizedStyle}>
          <p className="text-gray-800">The current count is: {count}</p>
        </div>
        <button
          onClick={() => setCount(count + 1)}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Increment Count
        </button>
      </section>
    </div>
  );
}

export default UseMemoExample;
