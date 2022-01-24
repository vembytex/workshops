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

export function greeting(name: string): string {
  return "";
}
