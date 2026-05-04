import { test, expect } from "@playwright/test"

test.describe("navbar", () => {
  test("desktop pill is horizontally centered at 1920px (regression: motion overrode -translate-x-1/2)", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto("/")

    // The desktop nav is the only <header> visible at lg+ (mobile nav is hidden via lg:hidden).
    const header = page.getByRole("banner")
    await expect(header).toBeVisible()

    const box = await header.boundingBox()
    expect(box).not.toBeNull()

    const centerX = box!.x + box!.width / 2
    const viewport = page.viewportSize()!
    const viewportCenter = viewport.width / 2

    // Allow a small tolerance for sub-pixel rounding from the transform.
    expect(Math.abs(centerX - viewportCenter)).toBeLessThan(8)
  })

  test("mobile menu opens with nav links and a Resume CTA inside", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 }) // iPhone 14
    await page.goto("/")

    await page.getByRole("button", { name: /toggle menu/i }).click()

    // Scope to the mobile <header> so we don't mistakenly match buttons elsewhere
    // on the page (the Hero "View Resume" CTA, etc.).
    const mobileNav = page.getByRole("banner")
    await expect(mobileNav.getByRole("link", { name: "About" })).toBeVisible()
    await expect(mobileNav.getByRole("button", { name: /view resume/i })).toBeVisible()
  })
})
