import React, { useReducer } from 'react';

const initialState = { count: 0 };

function HookReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(HookReducer, initialState);

  return (
    <div className="p-8">
      <h3 className="mt-4 mb-2">HookReducer</h3>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={() => dispatch({ type: 'increment' })}>
        increment
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'decrement' })}>
        decrement
      </button>
      <p className="mt-4">Count: {state.count}</p>
    </div>
  );
}

export default Counter;
