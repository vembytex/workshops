/*

As a costumer i would like to see data from api x based on a user provided id.

Acceptance criteria:
- User can change id, and on change it (re)fetches data, if id is provided
- Fetched data is shown to the user
- If error occour an error message is shown with: "Something bad happened"
*/

import React, { useEffect, useState } from "react";
import { getData, IData } from "../utils/utils";

interface IDataListProps {}

export function DataList(props: IDataListProps) {
  const [list, setList] = useState<IData[]>([]);
  const [id, setId] = useState<string>("");
  const [error, setError] = useState<unknown | undefined>(undefined);

  useEffect(() => {
    if (id)
      getData(id)
        .then((data) => setList(data))
        .catch((e) => setError(e));
  }, [id]);

  function handleInputChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setId(target.value);
  }

  return (
    <>
      <h1>DataList</h1>
      <hr />
      <label>
        Id to fetch: <input value={id} onChange={handleInputChange} />
      </label>
      {!!error && <div role="alert">Something bad happened</div>}
      <hr />
      <ul>
        {list.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}
