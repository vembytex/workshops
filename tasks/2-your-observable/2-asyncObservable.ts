import { Observable } from "rxjs";

// Make this emit (abc) 99ms (def|)
// Try console log to see execution
export const asyncObservable: Observable<string> = new Observable();
