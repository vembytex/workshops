import { Equal, Expect } from "./utils/utils";

const returnWhatIPassIn = (t: unknown) => {
  return t;
};

const one = returnWhatIPassIn(1);
const name = returnWhatIPassIn("test");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof name, "test">>];
