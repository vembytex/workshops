import { Observable, Observer, OperatorFunction, filter, pipe } from "rxjs";

export function ignoreFalsyValues(): OperatorFunction<unknown, unknown> {
  return pipe(filter(Boolean));
}

export function last(): OperatorFunction<unknown, unknown> {
  return (observable) =>
    new Observable((subscriber) => {
      let lastEmission: unknown = undefined;
      const observer: Observer<unknown> = {
        next: (value) => {
          lastEmission = value;
        },
        error: (error) => {
          subscriber.error(error);
        },
        complete: () => {
          subscriber.next(lastEmission);
          subscriber.complete();
        },
      };

      const subscription = observable.subscribe(observer);

      return () => subscription.unsubscribe();
    });
}
