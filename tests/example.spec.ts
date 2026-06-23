import { test, expect } from "../playwright-fixture";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:8080");
  await expect(page).toHaveTitle(/GDSS/i);
});
