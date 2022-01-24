import { render, screen } from '@testing-library/react';
import React, * as reactModule from 'react';
import App, { ISomeItem } from './App';

it('renders filetered data and doesnt render unnessary due to wrong state', async () => {
  const items: ISomeItem[] = [
    {
      type: 'a',
      name: 'a_1'
    },
    {
      type: 'a',
      name: 'a_2'
    },
    {
      type: 'b',
      name: 'b_1'
    },
    {
      type: 'c',
      name: 'c_1'
    }
  ];

  let rerenders = 0;
  function handleRender() {
    rerenders++;
  }

  render(
    <React.Profiler id={`app`} onRender={handleRender}>
      <App items={items} filterBy="a" />
    </React.Profiler>
  );

  const a1 = await screen.findByText('a_1');
  const a2 = await screen.findByText('a_2');

  const b1 = screen.queryByText('b_1');
  const c1 = screen.queryByText('c_2');

  expect(a1).not.toBeNull();
  expect(a1).not.toBeNull();
  expect(b1).toBeNull();
  expect(c1).toBeNull();
  expect(rerenders).toBe(1);
});
