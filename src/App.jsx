import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UseStateExample from './pages/UseStateExample.jsx'
import UseEffectExample from './pages/UseEffectExample.jsx'
import UseContextExample from './pages/UseContextExample.jsx'
import UseRefExample from './pages/UseRefExample.jsx'
import UseReducerExample from './pages/UseReducerExample.jsx'
import UseCallbackExample from './pages/UseCallbackExample.jsx'


UseCallbackExample

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        {/* Navigation */}
        <nav className="w-full max-w-3/4 flex flex-wrap justify-between p-4 bg-white shadow-md">
          <Link to="/" className="text-blue-500 hover:bg-purple-200 p-1">
            Home
          </Link>
          <Link to="/about" className="text-blue-500 hover:bg-purple-200 p-1">
            About
          </Link>
          <Link to="/usestate" className="text-blue-500 hover:bg-purple-200 p-1">
            UseStateExample
          </Link>
          <Link to="/useeffect" className="text-blue-500 hover:bg-purple-200 p-1">
            UseEffectExample
          </Link>
          <Link to="/usecontext" className="text-blue-500 hover:bg-purple-200 p-1">
            UseContextExample
          </Link>
          <Link to="/useref" className="text-blue-500 hover:bg-purple-200 p-1">
            UseRefExample
          </Link>
          <Link to="/usereducer" className="text-blue-500 hover:bg-purple-200 p-1">
            UseReducerExample
          </Link>
          <Link to="/usecallback" className="text-blue-500 hover:bg-purple-200 p-1">
            UseCallbackExample
          </Link>
        </nav>

        {/* Page Content */}
        <main className="w-full max-w-md mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/usestate" element={<UseStateExample />} />
            <Route path="/useeffect" element={<UseEffectExample />} />
            <Route path="/usecontext" element={<UseContextExample />} />
            <Route path="/useref" element={<UseRefExample />} />
            <Route path="/usereducer" element={<UseReducerExample />} />
            <Route path="/usecallback" element={<UseCallbackExample />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
