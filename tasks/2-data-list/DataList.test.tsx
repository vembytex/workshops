import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataList } from "./DataList";
import * as utils from "../utils/utils";
import { Mock } from "vitest";

describe.skip("<DataList />", () => {
  beforeEach(() => {
    vi.spyOn(utils, "getData").mockResolvedValue([]);
  });
});
