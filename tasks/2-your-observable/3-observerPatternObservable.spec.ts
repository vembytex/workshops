import { expect, describe, it, vi, beforeEach } from "vitest";
import { Subject } from "../1-observer-pattern/observerPattern";
import { createObserverPatternObservable } from "./3-observerPatternObservable";

// TODO: REMOVE SKIP WHEN AT THIS TASK
describe.skip("observable from observer pattern", () => {
  it("emits as expected", () => {
    const subject = new Subject();

    const next = vi.fn();
    const observable = createObserverPatternObservable(subject);
    observable.subscribe(next);

    subject.notifyObservers();

    expect(next).toHaveBeenCalled();
  });
});
