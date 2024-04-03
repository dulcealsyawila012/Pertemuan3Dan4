import React, { useState, useCallback } from 'react';
import 'tailwindcss/tailwind.css';
function HookCallback() {
  const [message, setMessage] = useState('');

  const handleClick = useCallback((text) => {
    setMessage(`Hello ${text}`);
  }, []);

  return (
    <div className="p-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('World')}>
        World
      </button>
      <p className="mt-4">{message}</p>
    </div>
  );
}

export default HookCallback;
