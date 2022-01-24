import { greeting } from "./welcome";
import * as utils from "../utils/utils";

describe("greeting", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("logs an error and returns empty string if name is not provided", () => {
    const log = vi.spyOn(utils, "log");

    const name = "";

    const result = greeting(name);

    expect(log).toHaveBeenCalledWith("Name empty");
    expect(result).toBe("");
  });

  it("returns sleepy message if time is night", () => {
    vi.setSystemTime(new Date().setHours(0));
    const name = "fred";

    const result = greeting(name);

    expect(result).toBe("fred you should sleep now");
  });

  it("returns morning message if time is morning", () => {
    vi.setSystemTime(new Date().setHours(6));
    const name = "fred";

    const result = greeting(name);

    expect(result).toBe("Good morning fred");
  });

  it("returns afternoon message if time is afternoon", () => {
    vi.setSystemTime(new Date().setHours(12));
    const name = "fred";

    const result = greeting(name);

    expect(result).toBe("Good afternoon fred");
  });

  it("returns evening message if time is evening", () => {
    vi.setSystemTime(new Date().setHours(17));
    const name = "fred";

    const result = greeting(name);

    expect(result).toBe("Good evening fred");
  });
});
