import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataList } from "./DataList";
import * as utils from "../utils/utils";
import * as CounterModule from "../1-counter/Counter";
import { Mock } from "vitest";

describe("<DataList />", () => {
  beforeEach(() => {
    vi.spyOn(utils, "getData").mockResolvedValue([]);
    vi.spyOn(CounterModule, "Counter").mockImplementation(() => (
      <span data-testid="Counter" />
    ));
  });

  it("doesn't fetch data if id is not provided", () => {
    render(<DataList />);

    expect(utils.getData).not.toHaveBeenCalled();
  });

  it("renders fetched data", async () => {
    (utils.getData as Mock).mockResolvedValue([
      { name: "first entry" },
      { name: "second entry" },
    ]);
    render(<DataList />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "123" } });

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent("first entry");
    expect(listItems[1]).toHaveTextContent("second entry");
  });

  it("renders an error if fetch fails", async () => {
    (utils.getData as Mock).mockRejectedValue("error");
    render(<DataList />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "123" } });

    expect(await screen.findByRole("alert")).toBeVisible();
  });
});
