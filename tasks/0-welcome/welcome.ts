/*
As a consumer of this greeting method, i would expect to recieve a greeting with my personal name that is appropriate to the time of day.

Acceptance criteria:
- from 00:00 - 05:59 it should return "{name} you should sleep now"
- from 06:00 - 11:59 it should return "Good morning {name}"
- from 12:00 - 16:59 it should return "Good afternoon {name}"
- from 17:00 - 23:59 it should return "Good evening {name}"
- If name is not provided it should log an error "Name empty" (use log fn in utils)
  and return empty string
*/

import { log } from "../utils/utils";

interface IRange {
  from: number;
  to: number;
  message: string;
}

export function greeting(name: string): string {

  if (!name) {
    log("Name empty");
    return "";
  }

  const hour = new Date().getHours();

  const range: IRange[] = [
    {
      from: 0,
      to: 6,
      message: `${name} you should sleep now`
    },
    {
      from: 6,
      to: 12,
      message: `Good morning ${name}`
    },
    {
      from: 12,
      to: 17,
      message: `Good afternoon ${name}`
    },
    {
      from: 17,
      to: 24,
      message: `Good evening ${name}`
    }
  ];

  return range.find(x => x.from <= hour && x.to > hour)!.message;
}
