import React, { useCallback, useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const state = new BehaviorSubject<string>("initial");

export function App(): React.ReactNode {
  const [, setReactState] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    state.next("modified");
  }, []);

  useEffect(() => {
    const sub = state.subscribe((value) => setReactState((s) => !s));
    return () => sub.unsubscribe();
  }, []);

  return (
    <div>
      State is: {state.value}{" "}
      <button role="button" onClick={handleClick}>
        change state
      </button>
    </div>
  );
}
