import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('', () => {
  const renders = [];
  const handleRender = (id, phase) => {
    renders.push({ id, phase });
  };

  render(
    <React.Profiler id="app" onRender={handleRender}>
      <App />
    </React.Profiler>
  );

  console.table(
    renders.reduce(
      (prev, curr) => ({ ...prev, [curr.phase]: (prev[curr.phase] ?? 0) + 1 }),
      {}
    )
  );
});
