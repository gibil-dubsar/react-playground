import React from 'react';
export const meta = {
  title: 'Home',
};

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My App</h1>
      <p className="text-gray-700">
        This is the Home page, styled with Tailwind CSS.
      </p>
      <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
}

export default Home;
