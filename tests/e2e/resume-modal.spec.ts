import { test, expect } from "@playwright/test"

test.describe("resume modal", () => {
  test("opens from hero CTA, renders the PDF, closes on ESC", async ({ page }) => {
    await page.goto("/")

    // Scope to the hero — at desktop the navbar pill also has a similar label.
    await page.locator("#home").getByRole("button", { name: /view resume/i }).click()

    const dialog = page.getByRole("dialog", { name: /akshat sahu — resume/i })
    await expect(dialog).toBeVisible()

    // PDF iframe is mounted with the correct source
    const iframe = dialog.locator('iframe[title="Akshat Sahu Resume"]')
    await expect(iframe).toBeVisible()
    const src = await iframe.getAttribute("src")
    expect(src).toContain("/AkshatSahu_Resume.pdf")

    // Header actions
    await expect(dialog.getByRole("link", { name: /open resume in new tab/i })).toBeVisible()
    await expect(dialog.getByRole("link", { name: /download resume/i })).toBeVisible()

    // ESC closes
    await page.keyboard.press("Escape")
    await expect(dialog).not.toBeVisible()
  })

  test("opens from the desktop navbar Resume pill", async ({ page }) => {
    // Force a viewport wide enough to show the desktop navbar (lg+).
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto("/")

    // The desktop pill button has aria-label="View resume" (lowercase 'r') and
    // lives inside <header> (banner). Scope so we don't collide with the hero.
    await page
      .getByRole("banner")
      .getByRole("button", { name: "View resume" })
      .click()

    await expect(page.getByRole("dialog", { name: /akshat sahu — resume/i })).toBeVisible()
  })

  test("download link points at the local PDF, not Google Drive", async ({ page }) => {
    await page.goto("/")
    await page.locator("#home").getByRole("button", { name: /view resume/i }).click()

    const dialog = page.getByRole("dialog", { name: /akshat sahu — resume/i })
    const download = dialog.getByRole("link", { name: /download resume/i })
    const href = await download.getAttribute("href")
    expect(href).toBe("/AkshatSahu_Resume.pdf")
  })

  test("PDF asset is served with correct headers", async ({ request }) => {
    const response = await request.get("/AkshatSahu_Resume.pdf")
    expect(response.status()).toBe(200)
    expect(response.headers()["content-type"]).toContain("application/pdf")
    // next.config.mjs sets a long-lived cache for the resume.
    expect(response.headers()["cache-control"]).toContain("max-age=86400")
  })
})
