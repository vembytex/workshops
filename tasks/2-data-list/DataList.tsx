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
  return <></>;
}
