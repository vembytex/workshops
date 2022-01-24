import { useState, useEffect } from 'react';

export default function App({ items }) {
  const [derivedState, setDerivedState] = useState("");

  useEffect(() => 
    setDerivedState(`the length of the list is ${items.length}`), 
    [items.length]
  );

  return <div>{derivedState}</div>;
}
