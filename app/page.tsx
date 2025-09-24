'use client';
import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">CELO Counter App</h1>
      <div className="bg-bg p-8 rounded-lg shadow-lg">
        <div className="text-6xl font-bold mb-8">{count}</div>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-accent hover:bg-opacity-80 text-bg px-6 py-3 rounded-lg font-medium transition-all duration-200"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="bg-accent hover:bg-opacity-80 text-bg px-6 py-3 rounded-lg font-medium transition-all duration-200"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
