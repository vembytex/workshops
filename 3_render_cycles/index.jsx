import React, { useRef, useCallback, useState } from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

const rerenders = {};
test('', () => {
  const initial = Array.from({ length: 10 }, (v, k) => ({ value: k }));

  render(<App items={initial} />);

  fireEvent.input(screen.queryByTestId('0'), { target: { value: 200 } });
  console.log(rerenders);
});

function App() {
  const [items, setItems] = useState(() =>
    Array.from({ length: 10 }, (v, k) => ({ value: k }))
  );

  function handleChange(i, e) {
    setItems((items) => items.map((item, index) => (index === i ? { value: e } : item)));
  }

  function handleRender(id, ...args) {
    console.log(id, args);
    rerenders[id] = (rerenders[id] ?? 0) + 1;
  }

  return (
    <React.Profiler id={`app`} onRender={handleRender}>
      <div>
        {items.map((item, index) => (
          <Item key={index} id={index} value={item.value} onChange={handleChange} />
        ))}
      </div>
    </React.Profiler>
  );
}

function Item({ id, value, onChange }) {
  function handleChange(e) {
    onChange(id, e.target.value);
  }

  return <input data-testid={id} type="text" value={value} onChange={handleChange} />;
}
