import { test, expect } from "@playwright/test"

test("the cinematic model scrubs continuously and reverses within the same chapter", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 960 })
  await page.emulateMedia({ reducedMotion: "no-preference" })
  await page.goto("/")
  await expect(page.locator("[data-motion]")).toHaveAttribute(
    "data-motion",
    "on",
  )

  async function scrub(progress: number) {
    await page.locator("#systems").evaluate((element, value) => {
      const start = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: start + (element.clientHeight - innerHeight) * value,
        behavior: "instant",
      })
    }, progress)
  }
  const camera = () =>
    page
      .locator(".film-engine")
      .evaluate((element) => getComputedStyle(element).transform)
  const initial = await camera()
  await scrub(0.12)
  await expect.poll(camera).not.toBe(initial)
  await expect(page.locator(".film-copy-0")).toHaveCSS("opacity", "1")
  const first = await camera()
  await scrub(0.17)
  await expect.poll(camera).not.toBe(first)
  await expect(page.locator(".film-copy-0")).toHaveCSS("opacity", "1")
  await scrub(0.48)
  await expect(page.locator(".film-copy-1")).toHaveCSS("opacity", "1")
  await expect(page.locator(".film-ghost > span").nth(1)).toHaveCSS(
    "opacity",
    "0.07",
  )
  expect(
    await page
      .locator(".film-sticky")
      .evaluate((element) => element.getBoundingClientRect().top),
  ).toBe(0)
  await scrub(0.12)
  await expect.poll(camera).toBe(first)
})

test("reduced motion presents all cinematic chapters in normal document flow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/")
  await expect(page.locator("[data-motion]")).toHaveAttribute(
    "data-motion",
    "off",
  )
  await expect(page.locator(".film-sticky")).toHaveCSS("position", "relative")
  for (const title of [
    "First, find the signal.",
    "Then, give it direction.",
    "Intelligence. Put to work.",
  ]) {
    await expect(
      page.getByRole("heading", { name: title, exact: true }),
    ).toBeVisible()
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true)
})
