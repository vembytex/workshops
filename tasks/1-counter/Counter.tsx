/*
As a customer i would like to see a simple counter that starts from {startValue} and can be increased by a button by 1.

Acceptance criteria:
- Counter is shown to the customer, starting from 2, writing "counter: 2"
- A button with label "+" is visslbe and when clicked it increase counter by 1
- A button with label "clear" is vissble and when clicked it should reset counter
*/

import { useState } from "react";

interface ICounterProps {
  startValue: number;
}

export function Counter({ startValue }: ICounterProps) {
  return <></>;
}
