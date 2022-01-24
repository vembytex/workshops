import { greeting } from "./welcome";
import * as utils from "../utils/utils";

describe("greeting", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Use this to fake time: vi.setSystemTime(new Date().setHours(0));
  });
});
