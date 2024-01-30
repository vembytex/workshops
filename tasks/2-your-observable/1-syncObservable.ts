import { Observable } from "rxjs";

// Make this emit (abc|)
export const syncObservable: Observable<string> = new Observable((sub) => {
  sub.next("a");
  sub.next("b");
  sub.next("c");
  sub.complete();
  sub.next("f");
});
