import { test, expect } from "@playwright/test"

test.describe("home page", () => {
  test("renders the hero with name, role, and resume CTA", async ({ page }) => {
    await page.goto("/")

    await expect(page.getByRole("heading", { name: "Akshat Sahu", level: 1 })).toBeVisible()
    await expect(page.getByText("Available for opportunities")).toBeVisible()

    // Hero View Resume button — scope to the hero section so we don't collide
    // with the navbar's "Resume" pill or the mobile menu's button.
    const heroResume = page.locator("#home").getByRole("button", { name: /view resume/i })
    await expect(heroResume).toBeVisible()
  })

  test("has the expected document title and meta description", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Akshat Sahu/)
    const description = await page.locator('meta[name="description"]').getAttribute("content")
    expect(description).toBeTruthy()
    expect(description!.length).toBeGreaterThan(50)
  })

  test("projects are temporarily hidden without leaving broken section links", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#projects")).toHaveCount(0)
    await expect(page.locator('a[href="#projects"]')).toHaveCount(0)
    for (const href of await page.locator('a[href^="#"]').evaluateAll(
      (links) => links.map((link) => link.getAttribute("href")!),
    )) {
      await expect(page.locator(href)).toHaveCount(1)
    }
  })
})
