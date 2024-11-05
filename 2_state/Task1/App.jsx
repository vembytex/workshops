import React from 'react';
import { useState, useEffect } from 'react';

export default function App({ items }) {
  const derivedState = `the length of the list is ${items.length}`;

  return <div>{derivedState}</div>;
}
