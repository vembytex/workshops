import { rxSandbox } from "rx-sandbox";
import { concat, delay, last, map, merge, of, scan } from "rxjs";
import { describe, expect, test } from "vitest";

describe("operators can be used", () => {
  test.skip("task a", () => {
    const { getMessages, e, scheduler } = rxSandbox.create(true);

    const observable = of(1, 2, 3).pipe();

    expect(getMessages(observable)).toEqual(e("(abc|)", { a: 2, b: 4, c: 6 }));
  });

  test.skip("task b", () => {
    const { getMessages, e, scheduler } = rxSandbox.create(true);

    const observable = of("truncate", "me", "please").pipe();

    expect(getMessages(observable)).toEqual(
      e("(abc|)", { a: "truncate", b: "truncateme", c: "truncatemeplease" })
    );
  });

  test.skip("task c", () => {
    const { getMessages, e, scheduler } = rxSandbox.create(true);

    const observable = of("truncate", "me", "please").pipe();

    expect(getMessages(observable)).toEqual(
      e("(a|)", { a: "truncatemeplease" })
    );
  });

  test.skip("Why does this not pass?", () => {
    const { cold, getMessages, e, scheduler } = rxSandbox.create(true);

    const stream1 = cold("a--b--c--d");
    const stream2 = cold(" --d|");

    const observable = concat(stream1, stream2);

    expect(getMessages(observable)).toEqual(e("a--b--c--d--d|"));
  });

  test.skip("What is this expected to be?", () => {
    const { cold, getMessages, e, scheduler } = rxSandbox.create(true);

    const stream1 = cold("a--b--c--d");
    const stream2 = cold("---e");

    const observable = merge(stream1, stream2);

    expect(getMessages(observable)).toEqual(e("?"));
  });
});
