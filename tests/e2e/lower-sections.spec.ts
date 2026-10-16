import { test, expect } from "@playwright/test"

test.use({ contextOptions: { reducedMotion: "reduce" } })

test("skills categories replace the map without duplicate content or scroll jumps", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto("/")
  const skills = page.locator("#skills")
  await skills.scrollIntoViewIfNeeded()
  const categories = [
    "Languages",
    "AI & ML",
    "AI Frameworks",
    "Backend & Frontend",
    "LLMs",
    "Databases",
    "Cloud & DevOps",
  ]
  const scrollBefore = await page.evaluate(() => window.scrollY)
  for (const category of categories) {
    await skills.getByRole("button", { name: category, exact: true }).click()
    await expect(
      skills.getByRole("region", { name: `${category} skills`, exact: true }),
    ).toBeVisible()
    await expect(skills.locator(".skills-content")).toHaveCount(1)
    await expect(skills.locator(".stack-constellation")).toHaveCount(1)
    await expect(skills.locator('button[aria-pressed="true"]')).toHaveText(
      category,
    )
  }
  expect(
    Math.abs((await page.evaluate(() => window.scrollY)) - scrollBefore),
  ).toBeLessThan(3)
})

test("project workflows support keyboard selection independently on mobile with motion reduced", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  const codelens = page.getByRole("group", {
    name: "CodeLens AI workflow",
    exact: true,
  })
  const pitchpilot = page.getByRole("group", {
    name: "PitchPilot workflow",
    exact: true,
  })
  await codelens.scrollIntoViewIfNeeded()
  await codelens
    .getByRole("button", { name: "03 ROI", exact: true })
    .press("Enter")
  await expect(
    codelens.getByRole("heading", { name: "See what actually shipped." }),
  ).toBeVisible()
  await expect(
    codelens.getByRole("button", { name: "03 ROI", exact: true }),
  ).toHaveAttribute("aria-pressed", "true")
  await pitchpilot.scrollIntoViewIfNeeded()
  await pitchpilot
    .getByRole("button", { name: "02 Investor", exact: true })
    .press("Enter")
  await expect(
    pitchpilot.getByRole("heading", { name: "Practice the conversation." }),
  ).toBeVisible()
  await expect(
    codelens.getByRole("button", { name: "03 ROI", exact: true }),
  ).toHaveAttribute("aria-pressed", "true")
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true)
})
