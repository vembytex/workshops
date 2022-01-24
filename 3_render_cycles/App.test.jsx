import { fireEvent, render, screen } from '@testing-library/react';
import React, { useCallback, useState } from 'react';

function App() {
  const [items, setItems] = useState(() =>
    Array.from({ length: 3 }, () => ({ value: 0 }))
  );

  function handleChange(i,e) {
   setItems((items) => items.map((item, index) => (index === i ? { value: e } : item)));
  }

  return (
    <React.Profiler id={`app`} onRender={handleRender}>
      <div>
        {items.map((item, index) => (
            <Item id={index} key={index} value={item.value} onChange={handleChange} />
        ))}
      </div>
    </React.Profiler>
  );
}

function Item({ id, value, onChange }) {
  function handleChange(e) {
    onChange(id, e.target.value);
  }

  return <React.Profiler id={`item${id}`} key={id} onRender={handleRender}>
    <input data-testid={id} type="text" value={value} onChange={handleChange} />
  </React.Profiler>;
}

// Tests

const rerenders = {};

function handleRender(id, ...args) {
  rerenders[id] = (rerenders[id] ?? 0) + 1;
}

it('doesnt rerender unaffected child items', () => {
  const initial = Array.from({ length: 10 }, (v, k) => ({ value: k }));

  render(<App items={initial} />);

  const firstItemInput = screen.queryByTestId('0');

  fireEvent.input(firstItemInput, { target: { value: 100 } });
  fireEvent.input(firstItemInput, { target: { value: 200 } });
  fireEvent.input(firstItemInput, { target: { value: 200 } });
  fireEvent.input(firstItemInput, { target: { value: 300 } });

  console.log(rerenders);
  expect(rerenders.app).toBe(4);
  expect(rerenders.item0).toBe(4);
  expect(rerenders.item1).toBe(1);
  expect(rerenders.item2).toBe(1);
});