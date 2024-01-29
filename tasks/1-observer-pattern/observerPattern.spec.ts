import { expect, describe, it, vi } from "vitest";
import { Observer, Subject } from "./observerPattern";

// TODO: REMOVE SKIP WHEN AT THIS TASK
describe.skip("Subject", () => {
  it("can register observers and notify them", () => {
    // Arrange
    const observer1Update = vi.fn();
    const observer2Update = vi.fn();

    const subject = new Subject();
    const observer1: Observer = {
      update: observer1Update,
    };
    const observer2: Observer = {
      update: observer2Update,
    };

    subject.registerObserver(observer1);
    subject.registerObserver(observer2);

    // Act
    subject.notifyObservers();

    // Assert
    expect(observer1Update).toHaveBeenCalledOnce();
    expect(observer2Update).toHaveBeenCalledOnce();
  });

  it("can unregister observers and will thereafter not notify them", () => {
    // Arrange
    const observer1Update = vi.fn();
    const observer2Update = vi.fn();

    const subject = new Subject();
    const observer1: Observer = {
      update: observer1Update,
    };
    const observer2: Observer = {
      update: observer2Update,
    };

    subject.registerObserver(observer1);
    subject.registerObserver(observer2);

    subject.unregisterObserver(observer1);
    subject.unregisterObserver(observer2);

    // Act
    subject.notifyObservers();

    // Assert
    expect(observer1Update).not.toHaveBeenCalled();
    expect(observer2Update).not.toHaveBeenCalled();
  });
});
