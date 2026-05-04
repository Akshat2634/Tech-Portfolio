import { test, expect } from "@playwright/test"

test.describe("contact form", () => {
  test("submits successfully (Formspree mocked) and shows success state", async ({ page }) => {
    // Intercept the Formspree call so the test doesn't depend on the network or pollute prod.
    await page.route("https://formspree.io/f/**", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true }),
      })
    })

    await page.goto("/")
    await page.locator("#contact").scrollIntoViewIfNeeded()

    // Scope to the form — "Email" matches the contact info link otherwise.
    const form = page.locator("#contact form")
    await form.getByLabel("Name").fill("Playwright Bot")
    await form.getByLabel("Email").fill("bot@example.com")
    await form.getByLabel("Message").fill("Hello from CI.")

    await form.getByRole("button", { name: /send message/i }).click()

    await expect(page.getByText(/your message has been sent successfully/i)).toBeVisible()
  })

  test("shows error state when Formspree returns 4xx", async ({ page }) => {
    await page.route("https://formspree.io/f/**", async (route) => {
      await route.fulfill({
        status: 400,
        contentType: "application/json",
        body: JSON.stringify({ error: "bad request" }),
      })
    })

    await page.goto("/")
    await page.locator("#contact").scrollIntoViewIfNeeded()

    const form = page.locator("#contact form")
    await form.getByLabel("Name").fill("Playwright Bot")
    await form.getByLabel("Email").fill("bot@example.com")
    await form.getByLabel("Message").fill("Hello from CI.")

    await form.getByRole("button", { name: /send message/i }).click()

    await expect(page.getByText(/something went wrong/i)).toBeVisible()
  })
})
