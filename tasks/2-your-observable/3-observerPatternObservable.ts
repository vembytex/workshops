import { Observable } from "rxjs";
import { Subject } from "../1-observer-pattern/observerPattern";

export const createObserverPatternObservable: (
  subject: Subject
) => Observable<string> = (subject) => new Observable((subscriber) => {});
