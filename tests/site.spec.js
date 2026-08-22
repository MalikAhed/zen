const { test, expect } = require("@playwright/test");

const viewports = [
  ["small-phone", 360, 640],
  ["modern-phone", 390, 844],
  ["large-phone", 430, 932],
  ["phone-landscape", 667, 375],
  ["tablet-portrait", 768, 1024],
  ["tablet-landscape", 1024, 768],
  ["short-laptop", 1366, 650],
  ["desktop", 1440, 900],
  ["full-hd", 1920, 1080],
  ["ultrawide", 2560, 1080]
];

for (const [name, width, height] of viewports) {
  test(`${name} has a stable, usable composition`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page).toHaveTitle(/Zen Cleaning/);
    await expect(page.locator("[data-hero-brand]")).toBeVisible();
    await expect(page.locator("[data-hero-title]")).toBeVisible();
    await expect(page.locator("[data-hero-cta]")).toBeVisible();
    await expect(page.locator("[data-hero-subject]")).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    expect(overflow).toBe(false);
  });
}

test("mobile navigation is keyboard and state accessible", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const toggle = page.locator(".menu-toggle");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#mobile-navigation")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
});

test("estimate request supports service selection, validation, and completion", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.locator('[data-service="Deep cleaning"]').click();
  const dialog = page.locator(".booking-dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('select[name="service"]')).toHaveValue("Deep cleaning");
  await dialog.locator('input[name="name"]').fill("Alex Morgan");
  await dialog.locator('input[name="email"]').fill("alex@example.com");
  await dialog.locator('button[type="submit"]').click();
  await expect(dialog.locator(".form-success")).toBeVisible();
  await expect(dialog.locator(".form-success")).toBeFocused();
});

test("reduced motion keeps all revealed content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const hiddenReveal = await page.locator("[data-reveal]").evaluateAll((items) => items.some((item) => getComputedStyle(item).opacity === "0"));
  expect(hiddenReveal).toBe(false);
});
