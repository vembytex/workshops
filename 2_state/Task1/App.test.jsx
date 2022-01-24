import { render, screen } from '@testing-library/react';
import React, * as reactModule from 'react';
import App from './App';

it('doesnt render unnessary due to wrong state', async () => {

  let rerenders = 0;
  function handleRender(id,...args) {
    rerenders++;
  }

  render(
    <React.Profiler id={`app`} onRender={handleRender}>
      <App
        items={Array.from({ length: 10 }, (v, k) => ({
          id: k
        }))}
        />
      </React.Profiler>
  );

  const text = await screen.findByText("the length of the list is 10");
  expect(text).not.toBeUndefined();
  expect(rerenders).toBe(1);
});
