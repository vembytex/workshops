import { expect, describe, it, vi } from "vitest";
import { syncObservable } from "./1-syncObservable";
import { rxSandbox } from "rx-sandbox";

// TODO: REMOVE SKIP WHEN AT THIS TASK
describe.skip("Simple observable", () => {
  it("emits as expected", () => {
    const { hot, cold, flush, getMessages, e, s } = rxSandbox.create(true);

    const messages = getMessages(syncObservable);

    expect(messages).toEqual(e("(abc|)"));
  });
});
