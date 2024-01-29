import { Observable, OperatorFunction, filter, pipe } from "rxjs";

export function ignoreFalsyValues(): OperatorFunction<unknown, unknown> {
  return () => new Observable();
}
