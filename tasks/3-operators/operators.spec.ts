import { rxSandbox } from "rx-sandbox";
import {
  combineLatest,
  concat,
  delay,
  last,
  map,
  merge,
  of,
  scan,
  tap,
} from "rxjs";
import { describe, expect, test } from "vitest";

describe.skip("operators can be used", () => {
  test("task a", () => {
    const { getMessages, e, scheduler } = rxSandbox.create(true);

    const observable = of(1, 2, 3).pipe(map((value) => value * 2));

    expect(getMessages(observable)).toEqual(e("(abc|)", { a: 2, b: 4, c: 6 }));
  });

  test("task b", () => {
    const { getMessages, e, scheduler } = rxSandbox.create(true);

    const observable = of("truncate", "me", "please").pipe(
      scan((acc, value) => acc + value, "")
    );

    expect(getMessages(observable)).toEqual(
      e("(abc|)", { a: "truncate", b: "truncateme", c: "truncatemeplease" })
    );
  });

  test("task c", () => {
    const { getMessages, e, scheduler } = rxSandbox.create(true);

    const observable = of("truncate", "me", "please").pipe(
      scan((acc, value) => acc + value, ""),
      last()
    );

    expect(getMessages(observable)).toEqual(
      e("(a|)", { a: "truncatemeplease" })
    );
  });

  test("Why does this not pass?", () => {
    const { hot, cold, getMessages, e, scheduler } = rxSandbox.create(true);

    const stream1 = cold("a--b--c--d|");
    const stream2 = cold(" --d|");

    const observable = concat(stream1, stream2);

    expect(getMessages(observable)).toEqual(e("a--b--c--d--d|"));
  });

  test("What is this expected to be?", () => {
    const { cold, getMessages, e, scheduler } = rxSandbox.create(true);

    const stream1 = cold("a--b--c--d");
    const stream2 = cold("---e");

    const observable = merge(stream1, stream2);

    expect(getMessages(observable)).toEqual(e("?"));
  });

  test("combineLatest", () => {
    const { cold, getMessages, e, scheduler } = rxSandbox.create(true);

    const stream1 = cold("a--b--c--d");
    const stream2 = cold("--e-");

    const observable = combineLatest([stream1, stream2]).pipe(
      tap(([stream1Value, stream2Value]) => {
        //
      })
    );

    expect(getMessages(observable)).toEqual(e("?"));
  });
});
