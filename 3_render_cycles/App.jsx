import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

export function App({ items, compute }) {
  const [state, setState] = useState(0);

  const filteredItems = items.filter((item) => item > state);
  const computedItems = compute(filteredItems);

  useEffect(() => setState(10), [setState]);

  return (
    <div>
      <div>{filteredItems.length}</div>
      <Component items={computedItems} onInit={setState} />
    </div>
  );
}

function Component({ items, onInit }) {
  useEffect(() => onInit(20), [onInit]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
