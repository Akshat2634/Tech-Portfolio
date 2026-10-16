import { test, expect } from "@playwright/test"

const scenes = [
  [".portrait-composition", ".token-build"],
  [".career-flight", ".career-courier"],
  [".experience-entry", ".career-card"],
  [".learning-scene", ".learning-book"],
  [".education-entry", ".education-card"],
  [".contact-signal", ".signal-envelope"],
  [".portfolio-footer", ".footer-name-first"],
] as const

test("every lower section has a graphic that scrubs with document scrolling", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 960 })
  await page.emulateMedia({ reducedMotion: "no-preference" })
  await page.goto("/")
  await expect(page.locator("[data-motion]")).toHaveAttribute(
    "data-motion",
    "on",
  )
  for (const [source, target] of scenes) {
    const scene = page.locator(source).first()
    const graphic = scene.locator(target).first()
    const pose = () =>
      graphic.evaluate((element) => {
        const style = getComputedStyle(element)
        return JSON.stringify([style.transform, style.translate, style.rotate])
      })
    async function place(top: number) {
      await scene.evaluate(
        (element, offset) =>
          window.scrollTo({
            top: element.getBoundingClientRect().top + scrollY - offset,
            behavior: "instant",
          }),
        top,
      )
    }
    const initial = await pose()
    await place(700)
    await expect
      .poll(pose, { message: `${source} must move into view` })
      .not.toBe(initial)
    const entering = await pose()
    await place(350)
    await expect
      .poll(pose, {
        message: `${source} must continue moving as the page scrolls`,
      })
      .not.toBe(entering)
  }
})

test("lower-page scenes stay still under reduced motion and preserve mobile content", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: "reduce" })
  const pageErrors: string[] = []
  page.on("pageerror", (error) => pageErrors.push(error.message))
  await page.goto("/")
  await expect(page.locator("[data-motion]")).toHaveAttribute(
    "data-motion",
    "off",
  )
  for (const [source, target] of scenes) {
    await expect(
      page.locator(source).first().locator(target).first(),
    ).toHaveCSS("animation-name", "none")
  }
  await expect(
    page.getByRole("heading", { name: "Work Experience", exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "Education", exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole("textbox", { name: "Message", exact: true }),
  ).toBeEditable()
  await expect(
    page.getByRole("link", { name: "Back to top", exact: true }),
  ).toHaveAttribute("href", "#home")
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true)
  expect(pageErrors).toEqual([])
})
