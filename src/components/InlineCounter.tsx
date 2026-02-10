import React, {useState} from 'react';

export default function InlineCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}