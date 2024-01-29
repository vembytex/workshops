import { expect, describe, it, vi, beforeEach } from "vitest";
import { asyncObservable } from "./2-asyncObservable";
import { rxSandbox } from "rx-sandbox";

// TODO: REMOVE SKIP WHEN AT THIS TASK
describe.skip("async observable", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    return () => vi.useRealTimers();
  });

  it("emits as expected", () => {
    const { hot, cold, flush, getMessages, e, scheduler } =
      rxSandbox.create(true);

    const messages = getMessages(asyncObservable);

    vi.runAllTimers();

    expect(messages).toEqual(e("(abcdef|)"));
  });
});
