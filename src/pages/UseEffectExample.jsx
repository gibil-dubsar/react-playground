import React, { useState, useEffect } from 'react';

function UseEffectExample() {
  // Section 1: Effect on Mount (ComponentDidMount)
  // This effect runs only once after the component is mounted.
  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  // Section 2: Effect with Dependency Array
  // We use a state value 'count' to demonstrate that this effect
  // runs every time 'count' changes.
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, [count]);

  // Section 3: Interval Timer with Cleanup
  // Here, an interval is set up to update a timer every second.
  // The effect cleans up the interval when the component unmounts.
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    // Cleanup function to clear the interval
    return () => {
      clearInterval(interval);
      console.log("Interval cleared on unmount");
    };
  }, []);

  // Section 4: Data Fetching Simulation
  // This effect simulates fetching data asynchronously.
  // After a delay, it sets a piece of data.
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // Simulate network latency with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setData("Fetched data result");
      console.log("Data fetched and state updated");
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">useEffect Examples</h1>

      {/* Section 1: Effect on Mount */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Mount Effect</h2>
        <p className="text-gray-700 mb-4">
          This effect runs only once when the component is first mounted.
          Open your browser's console to see the message.
        </p>
      </section>

      {/* Section 2: Effect with Dependency Array */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Effect with Dependency Array</h2>
        <p className="text-gray-700 mb-4">
          This effect runs every time the count state changes.
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-xl">Count: {count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Increment Count
          </button>
        </div>
      </section>

      {/* Section 3: Interval Timer with Cleanup */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Interval Timer with Cleanup</h2>
        <p className="text-gray-700 mb-4">
          This effect sets up an interval that updates a timer every second.
          It also cleans up the interval when the component unmounts.
        </p>
        <p className="text-xl">Seconds Elapsed: {seconds}</p>
      </section>

      {/* Section 4: Data Fetching Simulation */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Data Fetching Simulation</h2>
        <p className="text-gray-700 mb-4">
          This effect simulates data fetching with a delay. Once complete,
          the fetched data is displayed below.
        </p>
        {data ? (
          <p className="text-green-500">Data: {data}</p>
        ) : (
          <p className="text-gray-500">Loading data...</p>
        )}
      </section>
    </div>
  );
}

export default UseEffectExample;
