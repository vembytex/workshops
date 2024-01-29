import React, { useCallback, useState } from "react";

export function App(): React.ReactNode {
  const [state, setState] = useState("initial");

  const handleClick = useCallback(() => {
    setState("modified");
  }, []);

  return (
    <div>
      State is: {state}{" "}
      <button role="button" onClick={handleClick}>
        change state
      </button>
    </div>
  );
}
