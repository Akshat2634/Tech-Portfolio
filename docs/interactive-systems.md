# Interactive AI systems

The portfolio leads with Akshat’s identity, portrait, actual projects, and career. The hero’s primary action opens Projects. Project descriptions and contributions appear before their interactive workflow diagrams. A shorter, three-chapter illustration appears after the career, education, and skills sections as an explanation of his engineering approach. Its first-person narrative covers workflow design, agent coordination, and evaluation.

## Scroll cinema

`system-story.tsx` provides one large CSS 3D sculpture. On supported browsers, its stage stays pinned for 220 viewport heights (240 on phones). Native CSS view timelines continuously rotate the camera, separate and reposition the layers, gather a goal and specialist agents, and reveal the autonomy layer. Scrolling backward reverses every pose. Chapter copy and large background words transition with the same timeline. Chapter buttons scroll to the relevant point and support keyboard activation.

There are no scroll-event listeners, per-frame React updates, or chapter threshold jumps. Animated properties are transforms and opacity. Gradients and shadows remain static. Short phone landscapes, unsupported browsers, and motion-off mode present all three chapters in normal document flow. The persistent pause control honors the operating system's reduced-motion preference.

## Surrounding sections

- Hero: a portrait card sits among orbiting career and project labels. It moves gently with scrolling, and its small idle markers pause offscreen.
- About: portrait sheets spread and rotate independently, while PLAN / BUILD / SHIP badges orbit the portrait with document scrolling. Count-up statistics cancel their animation frames on cleanup and when motion stops.
- Experience: a career flight path connects Build, Orchestrate, and AI Coworkers, with a moving courier and three tilting milestones. The job cards also travel with scroll, settling while in the reading area. Detail expansion honors the global preference.
- Education: a CSS 3D book opens as its camera rotates; a graduation-cap badge moves independently. Degree cards tilt into place, alongside drawing accents and wrapping badges.
- Skills: stable category content and an animated selection indicator. A constellation uses actual skill names, with scroll-linked orbit rotation and satellite travel. Controls expose their pressed state and controlled region.
- Projects: the three workflow nodes assemble from separated, tilted positions as they enter view, then lift apart on exit. Independent keyboard-accessible controls explain CodeLens AI and PitchPilot in a polite live region.
- Contact: a large envelope flies through two orbital rings while its letter rises out, beside a scroll-linked invitation. The form stays stationary and its submission behavior is unchanged.
- Footer: a large AKSHAT SAHU wordmark assembles from opposite directions and an arrow rotates into place. The wordmark is a keyboard-accessible back-to-top link.

No dependencies were added. Existing theme controls, résumé, projects, and contact behavior remain available.

## Verification

Use `pnpm typecheck`, `pnpm build`, and `git diff --check`. Browser QA uses the production build in the Codex in-app browser.

`tests/e2e/cinematic-scroll.spec.ts` checks that the camera changes within the same chapter, reverses to the same pose, stays pinned, and presents all chapters in document flow under reduced motion. `tests/e2e/lower-sections.spec.ts` covers stable skills replacement and independent mobile workflow keyboard controls. `tests/e2e/journey-motion.spec.ts` verifies continuous scroll movement across all seven lower-page motion subjects and a static, usable mobile reduced-motion state. The full Playwright suite runs in GitHub Actions; physical-device GPU profiling was not performed.

The build reports an existing workspace-root warning because a lockfile exists above this checkout. It does not prevent compilation.

## Documentation consulted

- [Motion scroll animation](https://motion.dev/docs/react-scroll-animations)
- [Motion useScroll](https://motion.dev/docs/react-use-scroll)
- [Motion useTransform](https://motion.dev/docs/react-use-transform)
- [Motion reduced motion](https://motion.dev/docs/react-use-reduced-motion)
- [shadcn Button composition](https://ui.shadcn.com/docs/components/radix/button)
- [Apple product-page framing reference](https://www.apple.com/iphone-18-pro/)
