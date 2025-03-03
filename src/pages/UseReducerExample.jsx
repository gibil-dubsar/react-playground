import React, { useReducer, useState } from 'react';

// Reducer for the simple counter
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type: ' + action.type);
  }
}

// Reducer for the todo list management
function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }
      ];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'remove':
      return state.filter(todo => todo.id !== action.payload);
    default:
      throw new Error('Unknown action type: ' + action.type);
  }
}

function UseReducerExample() {
  // Section 1: Simple Counter using useReducer
  const [counterState, counterDispatch] = useReducer(counterReducer, { count: 0 });

  // Section 2: Todo List Management using useReducer
  const [todos, todoDispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim() === '') return;
    todoDispatch({ type: 'add', payload: todoText });
    setTodoText('');
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">useReducer Examples</h1>

      {/* Section 1: Simple Counter */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Simple Counter</h2>
        <p className="text-gray-700 mb-4">
          This example uses useReducer to manage a counter with increment, decrement, and reset actions.
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-xl">Count: {counterState.count}</span>
          <button
            onClick={() => counterDispatch({ type: 'increment' })}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Increment
          </button>
          <button
            onClick={() => counterDispatch({ type: 'decrement' })}
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
          >
            Decrement
          </button>
          <button
            onClick={() => counterDispatch({ type: 'reset' })}
            className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </section>

      {/* Section 2: Todo List Management */}
      <section className="p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-2">Todo List Management</h2>
        <p className="text-gray-700 mb-4">
          This example uses useReducer to manage a list of todos with actions to add, toggle, and remove items.
        </p>
        <div className="mb-4">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Enter new todo"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={addTodo}
            className="mt-2 w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
          >
            Add Todo
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between p-2 border rounded">
              <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {todo.text}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => todoDispatch({ type: 'toggle', payload: todo.id })}
                  className="py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => todoDispatch({ type: 'remove', payload: todo.id })}
                  className="py-1 px-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default UseReducerExample;
