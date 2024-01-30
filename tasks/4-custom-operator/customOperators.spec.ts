import { rxSandbox } from "rx-sandbox";
import {
  BehaviorSubject,
  Subject,
  concat,
  delay,
  map,
  merge,
  of,
  scan,
  share,
  tap,
} from "rxjs";
import { describe, expect, it } from "vitest";
import { ignoreFalsyValues, last } from "./customOperator";

describe.skip("ignoreFalsyValues", () => {
  it("emits as expected", () => {
    const { getMessages, e, scheduler } = rxSandbox.create(true);

    const observable = of("", "some", false, 0, "value").pipe(
      ignoreFalsyValues()
    );

    const messages = getMessages(observable);

    expect(messages).toEqual(e("(ab|)", { a: "some", b: "value" }));
  });
});

describe.skip("last", () => {
  it("emits as expected", () => {
    const { cold, getMessages, e, scheduler } = rxSandbox.create(true);

    const observable = cold("abc|").pipe(last());

    const messages = getMessages(observable);

    expect(messages).toEqual(e("---(c|)"));
  });

  it("testing", () => {
    const { flush, cold, getMessages, e, scheduler } = rxSandbox.create(false);

    const subject = new BehaviorSubject("initial value");

    subject.subscribe((value) => console.log("observer1", value));
    subject.subscribe((value) => console.log("observer2", value));

    subject.next("new  value");

    flush();

    //const messages = getMessages(subject);

    //expect(messages).toEqual(e("---(c|)"));
  });
});
