import { beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./behaviorSubject";

/**
 * @vitest-environment jsdom
 */
describe("<App />", () => {
  it("has react state with initial value", async () => {
    // Arrange
    const app = render(<App />);

    // Act
    const initialMessage = await app.findByText("State is: initial");
    userEvent.click(app.getByRole("button"));
    const modifiedMessage = await app.findByText("State is: modified");

    // Assert
    expect(initialMessage).toBeDefined();
    expect(modifiedMessage).toBeDefined();
  });
});
