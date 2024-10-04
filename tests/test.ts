import { assertEquals } from "jsr:@std/assert";
import { delay } from "jsr:@std/async";

Deno.test("simple test", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

Deno.test("async test", async () => {
  const x = 1 + 2;
  await delay(100);
  assertEquals(x, 3);
});

Deno.test({
  name: "read file test",
  permissions: { read: true },
  fn: () => {
    const data = Deno.readTextFileSync("./tests/somefile.txt");
    assertEquals(data, "expected content");
  },
});
