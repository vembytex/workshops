import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("<Counter />", () => {
  it("renders the counter with default value", () => {
    render(<Counter startValue={2} />);

    expect(screen.getByText("counter: 2")).toBeVisible();
  });

  it("increases counter when plus button is pressed", () => {
    render(<Counter startValue={2} />);

    const plusButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(plusButton);

    expect(screen.getByText("counter: 3")).toBeVisible();
  });

  it("resets counter when clear button is pressed", () => {
    render(<Counter startValue={2} />);

    const plusButton = screen.getByRole("button", { name: "+" });
    const clearButton = screen.getByRole("button", { name: "clear" });
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(clearButton);

    expect(screen.getByText("counter: 2")).toBeVisible();
  });
});
