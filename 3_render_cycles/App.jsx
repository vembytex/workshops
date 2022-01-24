import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

export function App({ name }) {
  const [value, setValue] = useState('');

  useEffect(() => setValue(name), [setValue, name]);

  return <div>{value}</div>;
}

ReactDOM.render();
