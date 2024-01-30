import { Observable } from "rxjs";

// Make this emit (abc) 99ms (def|)
// Try console log to see execution
export const asyncObservable: Observable<string> = new Observable(
  (subscriber) => {
    subscriber.next("a");
    subscriber.next("b");
    subscriber.next("c");

    const timer = setTimeout(() => {
      subscriber.next("d");
      subscriber.next("e");
      subscriber.next("f");
      subscriber.complete();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }
);

asyncObservable.subscribe().unsubscribe();
