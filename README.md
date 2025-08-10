### Following frequently used React hooks will be exercised in this repo:  
[See the live render of this repo here](https://gibil-dubsar.github.io/react-playground/)  
[The source code](https://github.com/gibil-dubsar/react-playground)  

1. **useState**  
   The cornerstone for managing component state. Almost every component that needs to store data uses it.

2. **useEffect**  
   Essential for handling side effects such as data fetching, subscriptions, and manually interacting with the DOM.

3. **useContext**  
   Frequently used for passing data through the component tree without prop drilling, especially in global state or theming scenarios.

4. **useRef**  
   Widely used both for accessing DOM elements and for keeping mutable values that persist across renders without causing re-renders.

5. **useReducer**  
   Often chosen over useState for managing more complex state logic in a predictable way.

6. **useCallback**  
   Useful for memoizing functions, particularly when passing callbacks to child components to prevent unnecessary re-renders.

7. **useMemo**  
   Helps optimize performance by memoizing expensive computations so that they’re only recalculated when necessary.

8. **useLayoutEffect**  
   Similar to useEffect, but it fires synchronously after all DOM mutations. It’s more specialized and is used when you need to read layout from the DOM and synchronously re-render.

9. **useImperativeHandle**  
   Used in conjunction with forwardRef to customize the instance value that is exposed to parent components when using refs. This hook is less common but crucial in certain advanced component scenarios.

10. **useDebugValue**  
    Mainly intended for custom hooks, it helps display a label for custom hooks in React DevTools. It’s rarely needed in everyday development.

This list is a general guide reflecting common usage patterns and discussions in the React community. Depending on your project’s needs, you might rely more on some hooks and less on others. For more details, you can refer to the [React documentation](https://reactjs.org/docs/hooks-overview.html) and various community articles that explore these hooks in depth.