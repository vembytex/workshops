import { Observable } from "rxjs";
import { Subject } from "../1-observer-pattern/observerPattern";

export const createObserverPatternObservable: (
  subject: Subject
) => Observable<string> = (subject) =>
  new Observable((subscriber) => {
    const observer = {
      update: () => subscriber.next(),
    };

    subject.registerObserver(observer);

    return () => {
      subject.unregisterObserver(observer);
    };
  });

export function fromEvent(event: keyof WindowEventMap): Observable<Event> {
  return new Observable((subscriber) => {
    const listener = (e: Event) => subscriber.next(e);

    window.addEventListener(event, listener);

    return () => {
      window.removeEventListener(event, listener);
    };
  });
}

fromEvent("click").pipe();
