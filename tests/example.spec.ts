import { test } from "@playwright/test";

test("example test", async ({ page }, testInfo) => {
  await page.goto("http://example.com");
  const screen = await page.screenshot();
  testInfo.attach("page screen", { body: screen, contentType: "image/png" });
});
