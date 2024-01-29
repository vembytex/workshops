import { rxSandbox } from "rx-sandbox";
import { concat, delay, map, merge, of, scan } from "rxjs";
import { describe, expect, it } from "vitest";
import { ignoreFalsyValues } from "./customOperator";

describe.skip("ignoreFalsyValues", () => {
  it("emits as expected", () => {
    const { getMessages, e, scheduler } = rxSandbox.create(true);

    const observable = of("", "some", false, 0, "value").pipe(
      ignoreFalsyValues()
    );

    const messages = getMessages(observable);

    expect(messages).toEqual(e("(ab|)", { a: "some", b: "value" }));
  });
});
