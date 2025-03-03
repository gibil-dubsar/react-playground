import React, { useRef, useState, useEffect } from 'react';

function UseRefExample() {
  /* 
    Section 1: Accessing a DOM Element
    We create a ref for an input element. The focusInput function uses the ref
    to call the .focus() method on the DOM element.
  */
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current?.focus();
  };

  /* 
    Section 2: Storing a Mutable Value
    Here, mutableCounter is a ref that holds a value which persists across renders.
    Since updating a ref does not cause a re-render, we use dummyState to force an update 
    so that we can display the updated value.
  */
  const mutableCounter = useRef(0);
  const [dummyState, setDummyState] = useState(0);
  const incrementMutable = () => {
    mutableCounter.current += 1;
    setDummyState(dummyState + 1); // Force a re-render to display the updated ref value.
  };

  /* 
    Section 3: Tracking a Previous Value
    In this section, we keep track of the previous value of a state variable.
    Each time 'value' changes, we update prevValueRef in an effect after render.
  */
  const [value, setValue] = useState('');
  const prevValueRef = useRef('');
  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">useRef Examples</h1>

      {/* Section 1: Accessing a DOM Element */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Accessing a DOM Element</h2>
        <p className="text-gray-700 mb-4">
          This example uses <code>useRef</code> to reference a DOM element (an input field)
          and programmatically focus it.
        </p>
        <div className="flex items-center space-x-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Click the button to focus me"
            className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={focusInput}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Focus Input
          </button>
        </div>
      </section>

      {/* Section 2: Storing a Mutable Value */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Storing a Mutable Value</h2>
        <p className="text-gray-700 mb-4">
          This example demonstrates how <code>useRef</code> can store a mutable value that persists
          across renders. The mutable counter value updates without triggering a re-render, so we use a dummy state update to force one.
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-xl">Mutable Counter: {mutableCounter.current}</span>
          <button
            onClick={incrementMutable}
            className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
          >
            Increment Mutable Counter
          </button>
        </div>
      </section>

      {/* Section 3: Tracking a Previous Value */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Tracking a Previous Value</h2>
        <p className="text-gray-700 mb-4">
          In this example, we use <code>useRef</code> to store the previous value of a state variable.
          As you type in the input below, the previous value is displayed.
        </p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <p className="mt-2 text-gray-600">Current Value: {value}</p>
        <p className="mt-1 text-gray-600">Previous Value: {prevValueRef.current}</p>
      </section>
    </div>
  );
}

export default UseRefExample;
