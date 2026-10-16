# Interactive AI systems

The portfolio pairs an orbital hero with a cinematic, three-chapter model of Akshat's work: knowledge, orchestration, and execution. The model is an explanatory illustration, not a live production system.

## Scroll cinema

`system-story.tsx` provides one large CSS 3D sculpture. On supported browsers, its stage stays pinned for 360 viewport heights (340 on phones). Native CSS view timelines continuously rotate the camera, separate and reposition the layers, gather context fragments, and reveal the execution layer. Scrolling backward reverses every pose. Chapter copy and large background words transition with the same timeline. Chapter buttons scroll to the relevant point and support keyboard activation.

There are no scroll-event listeners, per-frame React updates, or chapter threshold jumps. Animated properties are transforms and opacity. Gradients and shadows remain static. Short phone landscapes, unsupported browsers, and motion-off mode present all three chapters in normal document flow. The persistent pause control honors the operating system's reduced-motion preference.

## Surrounding sections

- Hero: the orbital sculpture enlarges and rotates away as its labels disperse with scrolling. Its small idle markers pause offscreen.
- About: layered portrait sheets travel and rotate with scroll. Count-up statistics cancel their animation frames on cleanup and when motion stops.
- Experience: individual card entrances and a scroll-linked connecting rail. Detail expansion honors the global preference.
- Education: individual entrances, drawing accents, hover elevation, and wrapping degree badges.
- Skills: stable category content and an animated selection indicator. A constellation uses actual skill names, with scroll-linked orbit rotation and satellite travel. Controls expose their pressed state and controlled region.
- Projects: the three workflow nodes assemble from separated, tilted positions as they enter view, then lift apart on exit. Independent keyboard-accessible controls explain CodeLens AI and PitchPilot in a polite live region.
- Contact: a connection path and envelope entrance, plus scroll-linked envelope flight. Form behavior is unchanged.

No dependencies were added. Existing theme controls, résumé, projects, and contact behavior remain available.

## Verification

Use `pnpm typecheck`, `pnpm build`, and `git diff --check`. Browser QA uses the production build in the Codex in-app browser.

`tests/e2e/cinematic-scroll.spec.ts` checks that the camera changes within the same chapter, reverses to the same pose, stays pinned, and presents all chapters in document flow under reduced motion. `tests/e2e/lower-sections.spec.ts` covers stable skills replacement and independent mobile workflow keyboard controls. The full Playwright suite runs in GitHub Actions; physical-device GPU profiling was not performed.

The build reports an existing workspace-root warning because a lockfile exists above this checkout. It does not prevent compilation.

## Documentation consulted

- [Motion scroll animation](https://motion.dev/docs/react-scroll-animations)
- [Motion useScroll](https://motion.dev/docs/react-use-scroll)
- [Motion useTransform](https://motion.dev/docs/react-use-transform)
- [Motion reduced motion](https://motion.dev/docs/react-use-reduced-motion)
- [shadcn Button composition](https://ui.shadcn.com/docs/components/radix/button)
- [Apple product-page framing reference](https://www.apple.com/iphone-18-pro/)
