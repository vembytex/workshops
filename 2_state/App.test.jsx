jest.mock('react', () => {
  const react = jest.requireActual('react');
  return {
    ...react,
    useState: jest.fn(react.useState)
  };
});

import { render } from '@testing-library/react';
import { useState } from 'react';
import App from './App';

test('', () => {
  render(
    <App
      items={Array.from({ length: 10 }, (v, k) => ({
        id: k,
        price: Math.random() * (2000 - 500) + 500
      }))}
    />
  );

  expect(useState).toHaveBeenCalledTimes(0);
});
