import { useState, useEffect } from 'react';

export default function App({ items }) {
  const [width, setWidth] = useState(items.length * 4);

  useEffect(() => setWidth(items.length * 4), [items.length]);

  return <div style={{ width }}>{items.length}</div>;
}
