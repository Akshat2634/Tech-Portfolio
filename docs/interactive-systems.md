# Interactive AI systems

The portfolio now opens with an orbital sculpture connecting knowledge, orchestration, and execution. A three-chapter section illustrates Akshat's approach to production AI: grounding with hybrid retrieval, coordinating specialized agents, and connecting tools with evaluation.

## Implementation

- `hero.tsx`: responsive editorial hero, labeled social links, existing résumé modal, and orbital sculpture. CSS animates only small orbital markers; Motion's visibility observer pauses them offscreen.
- `system-story.tsx`: sticky blueprint with scroll-triggered assembly. IntersectionObserver follows a narrow reading line at 65% of viewport height, recreated on resize. Pixel margins avoid percentage margins resolving against viewport width. Native buttons also select and scroll to chapters, including keyboard activation.
- `motion-preferences.tsx`: site-wide pause control with local persistence, system reduced-motion support, and MotionConfig. Chapter content and controls remain available with motion disabled.
- `globals.css`: scoped responsive layouts, transform/opacity motion, native scroll timelines for the hero exit and reading progress. Unsupported scroll timelines simply omit those two enhancements.
- `navbar.tsx`: navigation respects motion preferences.

No dependencies were added. The existing portfolio sections, theme controls, résumé, projects, and contact form remain in place. The blueprint is an explanatory illustration, not a live production system.

## Verification

- `pnpm typecheck`: passed.
- `pnpm build`: passed, including Next.js TypeScript validation and static generation.
- `git diff --check`: passed.
- Browser QA uses the production build in the Codex in-app browser. Verified chapter selection by mouse and keyboard, activation by scrolling to chapter content, reverse navigation, motion pause and persistence after reload, offscreen orbit pause, résumé modal open/close, and mobile menu.
- Desktop and phone layouts inspected in light and dark themes. Responsive overflow and short-landscape behavior checked during the review.
- The existing Playwright suite was not run locally. OS reduced-motion emulation and physical-device performance profiling were not performed.

The build reports a pre-existing workspace-root warning because another lockfile exists above this checkout. It does not prevent compilation.

## Documentation consulted

- [Motion scroll animation](https://motion.dev/docs/react-scroll-animations)
- [Motion reduced-motion hook](https://motion.dev/docs/react-use-reduced-motion)
- [shadcn Button composition](https://ui.shadcn.com/docs/components/radix/button)
- [User-supplied interaction reference](https://openai.com/index/gpt-6-for-everyone/)
