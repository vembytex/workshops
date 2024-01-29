import { Observable } from "rxjs";

// Make this emit (abc|)
export const syncObservable: Observable<string> = new Observable((sub) => {});
