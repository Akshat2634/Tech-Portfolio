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

  test("each project card has a valid GitHub URL", async ({ page }) => {
    await page.goto("/")
    // Scroll projects into view so dynamic-imported chunks hydrate.
    await page.locator("#projects").scrollIntoViewIfNeeded()

    const githubLinks = page.locator('#projects a[href*="github.com"]')
    const count = await githubLinks.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const href = await githubLinks.nth(i).getAttribute("href")
      expect(href).toMatch(/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+/)
    }
  })
})
