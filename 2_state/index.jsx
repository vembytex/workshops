import { useState, useEffect } from 'react';

const initialState = {
  items: Array.from({ length: 10 }, (v, k) => ({
    id: k,
    price: Math.random() * (2000 - 500) + 500
  }))
};

function App() {
  const [state, setState] = useState({});
}

function Component(state) {
  const [items, setItems] = useState(state.items);
  const [show, setShow] = useState(!!items.length);

  useEffect(() => setItems(state.items), []);
  useEffect(() => setShow(!!state.items.length), [state.items.length]);

  return show ? <div>{items.length}</div> : null;
}

test('', () => {});
