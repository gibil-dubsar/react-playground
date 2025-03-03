import React, { createContext, useContext, useState } from 'react';

// Create contexts with default values.
const ThemeContext = createContext('light');
const UserContext = createContext({ name: 'Guest' });

/* 
  Section 1: Basic Context Consumption
  This section shows how a component can consume context values
  when no provider is present—using the default values.
*/
function SectionBasicContext() {
  // Consume the default context values.
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <section className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-2xl font-semibold mb-2">Basic useContext</h2>
      <p className="text-gray-700">
        Default Theme: {theme} <br />
        Default User: {user.name}
      </p>
    </section>
  );
}

/* 
  Section 2: Using Providers and Dynamic Updates
  Here we override the default values by wrapping components in Providers.
  The theme value is made dynamic with local state and a toggle function.
  A nested component further demonstrates context consumption inside this provider.
*/
function SectionProviderContext() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const userValue = { name: 'Alice' };

  return (
    // Provide new values for ThemeContext and UserContext.
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={userValue}>
        <section className="p-4 bg-white shadow rounded mb-4">
          <h2 className="text-2xl font-semibold mb-2">useContext with Providers</h2>
          <p className="text-gray-700">
            Current Theme: {theme} <br />
            User: {userValue.name}
          </p>
          <button 
            onClick={toggleTheme} 
            className="mt-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Toggle Theme
          </button>
          {/* Nested component consuming the same context values */}
          <NestedContextComponent />
        </section>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

/* 
  NestedContextComponent
  This component, nested within the provider, shows that all components
  in the subtree can access the provided context values.
*/
function NestedContextComponent() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <div className="mt-4 p-4 border-t border-gray-200">
      <h3 className="text-xl font-medium mb-2">Nested Component</h3>
      <p className="text-gray-700">
        In the nested component: Theme is <strong>{theme}</strong> and User is <strong>{user.name}</strong>.
      </p>
    </div>
  );
}

/* 
  Section 3: Multiple Contexts in One Component
  This section demonstrates how to consume multiple contexts simultaneously
  to combine related pieces of data.
*/
function SectionMultipleContexts() {
  return (
    <section className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-2">Multiple Contexts Example</h2>
      <CombinedInfo />
    </section>
  );
}

/* 
  CombinedInfo
  Consumes both ThemeContext and UserContext to display combined information.
*/
function CombinedInfo() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <div>
      <p className="text-gray-700">
        Combined Info: User <strong>{user.name}</strong> prefers the <strong>{theme}</strong> theme.
      </p>
    </div>
  );
}

/* 
  Main Component: UseContextExample
  This component puts together all the sections to provide a comprehensive example
  of various useContext patterns.
*/
function UseContextExample() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">useContext Examples</h1>
      
      {/* Section 1: Consuming default context values */}
      <SectionBasicContext />

      {/* Section 2: Overriding context with Providers and dynamic updates */}
      <SectionProviderContext />

      {/* Section 3: Combining multiple contexts in one component */}
      <SectionMultipleContexts />
    </div>
  );
}

export default UseContextExample;
