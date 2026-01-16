import type { InsertBlogPost } from "@shared/schema";

export const blogPostsData: InsertBlogPost[] = [
  {
    slug: "clean-scalable-frontend-architecture",
    title: "How I Build Clean, Scalable Frontend Architecture",
    excerpt: "A deep dive into folder structure, component reuse, and thinking in systems—not just pages. Learn the patterns that make codebases maintainable.",
    content: `When I start a new frontend project, I don't just think about the first feature—I think about the tenth, the twentieth, and beyond. Clean architecture isn't about perfection from day one; it's about making good decisions that compound over time.

## Folder Structure That Scales

I organize my projects by feature, not by file type. Instead of having all components in one folder, all hooks in another, I group related code together:

\`\`\`
src/
  features/
    auth/
      components/
      hooks/
      utils/
    dashboard/
      components/
      hooks/
      utils/
  shared/
    components/
    hooks/
    utils/
\`\`\`

This approach means when I'm working on the auth feature, everything I need is in one place. No jumping between distant folders.

## Component Reuse Philosophy

I build components in three tiers:
1. **Primitives**: Button, Input, Card—the atomic building blocks
2. **Composites**: SearchBar, UserCard—combinations of primitives
3. **Features**: LoginForm, DashboardHeader—business logic components

Each tier only imports from tiers below it, never above. This creates a natural hierarchy that's easy to reason about.

## Thinking in Systems

The real secret is thinking about your UI as a system, not a collection of pages. Every component should have a single responsibility. Every hook should do one thing well. When you think this way, your codebase becomes a toolkit, not a tangled mess.`,
    coverImage: "/assets/generated_images/clean_frontend_architecture_blog_cover.png",
    publishedAt: new Date("2026-02-10"),
    tags: ["Architecture", "React", "Best Practices"]
  },
  {
    slug: "figma-to-pixel-perfect-ui",
    title: "From Design to Code: Turning Figma Designs into Pixel-Perfect UI",
    excerpt: "My process for translating designs with precision—covering spacing, typography, responsiveness, and maintaining design fidelity.",
    content: `There's an art to turning a beautiful Figma design into equally beautiful code. It's not just about matching colors—it's about understanding the designer's intent and preserving it in every breakpoint.

## My Translation Process

When I receive a design, I don't start coding immediately. First, I analyze:

1. **Typography Scale**: What's the type hierarchy? I extract every font size, weight, and line height.
2. **Spacing System**: Is there a consistent spacing scale (4px, 8px, 16px)?
3. **Color Tokens**: I create a color palette before writing a single component.

## The 8-Point Grid

I'm a firm believer in the 8-point grid system. All spacing, padding, and margins should be multiples of 8. This creates visual harmony and makes responsive design predictable.

\`\`\`css
/* Instead of arbitrary values */
padding: 13px 27px;

/* Use consistent spacing */
padding: 16px 24px;
\`\`\`

## Responsive Fidelity

A design that looks great at 1440px needs to look equally great at 375px. I work mobile-first, which means:
- Start with the smallest breakpoint
- Add complexity as screens get larger
- Test on real devices, not just browser resize

## The Pixel-Perfect Mindset

Pixel-perfect doesn't mean obsessing over every pixel—it means understanding when precision matters and when flexibility is better. Headlines should match exactly. Fluid layouts can breathe.`,
    coverImage: "/assets/generated_images/figma_to_code_blog_cover.png",
    publishedAt: new Date("2026-01-28"),
    tags: ["Design", "CSS", "UI/UX"]
  },
  {
    slug: "performance-faster-websites",
    title: "Performance Matters: How I Make Websites Load Faster",
    excerpt: "Practical techniques for image optimization, code splitting, lazy loading, and real-world speed improvements that users notice.",
    content: `Speed is a feature. Every 100ms of load time costs conversions. Here's how I approach performance optimization in every project I build.

## Measure First, Optimize Second

I never optimize blind. Before touching any code, I run:
- Lighthouse audits
- WebPageTest for real-world conditions
- Chrome DevTools Performance panel

These tools tell me WHERE the problems are, so I don't waste time optimizing things that don't matter.

## Image Optimization

Images are usually the biggest culprits. My approach:

1. **Right format**: WebP for photos, SVG for icons, PNG only when necessary
2. **Right size**: Never serve a 2000px image in a 400px container
3. **Lazy loading**: Below-fold images load on scroll
4. **Blur placeholders**: Show a tiny blurred version while loading

## Code Splitting

A 2MB JavaScript bundle is unacceptable. I split code by:
- Route-based splitting (each page loads its own code)
- Component-based splitting (heavy components load on demand)
- Library chunking (vendor code cached separately)

\`\`\`javascript
const HeavyChart = lazy(() => import('./HeavyChart'));
\`\`\`

## Real Results

These techniques aren't theoretical. On my last project, I reduced:
- First Contentful Paint from 3.2s to 1.1s
- Time to Interactive from 5.8s to 2.3s
- Total bundle size from 1.8MB to 420KB

Performance isn't a nice-to-have—it's a competitive advantage.`,
    coverImage: "/assets/generated_images/web_performance_blog_cover.png",
    publishedAt: new Date("2026-01-15"),
    tags: ["Performance", "Optimization", "Web Vitals"]
  },
  {
    slug: "reusable-react-components",
    title: "Building Reusable Components in React (That Don't Break Later)",
    excerpt: "My mindset around props, composition, and creating components that remain maintainable as your application grows.",
    content: `I've built hundreds of React components. The ones that survived and thrived share common patterns. The ones that became maintenance nightmares share common anti-patterns.

## The Composition Mindset

Don't build monolithic components. Build small pieces that compose together:

\`\`\`jsx
// Bad: One component doing everything
<Card showImage showTitle showDescription showButton />

// Good: Composable pieces
<Card>
  <Card.Image src={img} />
  <Card.Title>Hello</Card.Title>
  <Card.Description>World</Card.Description>
  <Card.Actions>
    <Button>Click me</Button>
  </Card.Actions>
</Card>
\`\`\`

## Props That Make Sense

Every prop should pass the "explain it to a colleague" test. If you can't explain why a prop exists, it probably shouldn't.

I limit most components to 5-7 props maximum. More than that usually means the component is doing too much.

## The Extension Pattern

Instead of adding endless boolean props, I use variants:

\`\`\`jsx
// Bad
<Button primary secondary outline ghost disabled loading />

// Good
<Button variant="primary" state="loading" />
\`\`\`

## Document As You Build

I write usage examples in comments above each component. Future me (and my teammates) thank present me every time.

The goal isn't clever code—it's code that a tired developer at 6pm on a Friday can understand and modify safely.`,
    coverImage: "/assets/generated_images/react_components_blog_cover.png",
    publishedAt: new Date("2025-12-20"),
    tags: ["React", "Components", "Best Practices"]
  },
  {
    slug: "responsive-design-real-world",
    title: "Responsive Design in the Real World (Not Just Media Queries)",
    excerpt: "Beyond breakpoints—exploring mobile-first thinking, fluid layouts, container queries, and testing on actual devices.",
    content: `Responsive design isn't about slapping some media queries on desktop code. It's a fundamentally different way of thinking about layout and interaction.

## Mobile-First Is a Mindset

I start every component at 320px width. This forces me to:
- Prioritize content ruthlessly
- Design for touch first (44px minimum tap targets)
- Consider performance on slower connections

Only after the mobile experience is solid do I enhance for larger screens.

## Fluid Typography

Fixed font sizes create jarring jumps at breakpoints. Instead, I use fluid typography:

\`\`\`css
/* Scales smoothly from 16px to 24px */
font-size: clamp(1rem, 0.5rem + 2vw, 1.5rem);
\`\`\`

## Container Queries: The Game Changer

Media queries ask "how wide is the viewport?" Container queries ask "how wide is my parent?" This is revolutionary for component-based design.

A card component can now adapt to its container, whether that's a narrow sidebar or a wide main content area.

## Real Device Testing

Browser DevTools lie. I test on:
- Actual iPhones (not just Safari's device mode)
- Android phones with different aspect ratios
- Tablets in both orientations
- My grandma's ancient iPad

The gap between simulation and reality is always humbling.

## Responsive Isn't Just Width

Don't forget:
- Hover states don't exist on touch devices
- Orientation changes need handling
- Keyboard navigation still matters on tablets
- Screen readers work on phones too`,
    coverImage: "/assets/generated_images/responsive_design_blog_cover.png",
    publishedAt: new Date("2025-12-05"),
    tags: ["Responsive", "CSS", "Mobile"]
  },
  {
    slug: "frontend-state-management-simple",
    title: "Frontend State Management Explained Simply",
    excerpt: "Breaking down local state, global state, and when tools like Redux, Zustand, or Context are actually needed—without the confusion.",
    content: `State management is one of the most over-complicated topics in frontend development. Let me simplify it.

## The State Decision Tree

Before reaching for any library, I ask:

1. **Does this state belong to one component?** → useState
2. **Does this state need to be shared by a few nearby components?** → Lift state up or Context
3. **Does this state need to be accessed from anywhere in the app?** → Consider a state library

90% of the time, the answer is #1 or #2.

## When Context Is Enough

React Context is perfect for:
- Theme (dark/light mode)
- Current user authentication
- Locale/language settings

It's NOT great for frequently updating state (like form inputs) because it re-renders all consumers.

## When You Actually Need Redux/Zustand

You need a state management library when:
- Multiple unrelated components need the same data
- You need to track complex state history
- Server state and client state are intertwined
- Your app has significant offline functionality

## My Go-To Stack

For most projects:
- **Server state**: React Query (handles caching, loading, errors)
- **UI state**: useState + Context
- **Complex client state**: Zustand (simpler than Redux)

\`\`\`javascript
// Zustand is beautifully simple
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
\`\`\`

The best state management is the least you can get away with.`,
    coverImage: "/assets/generated_images/state_management_blog_cover.png",
    publishedAt: new Date("2025-11-18"),
    tags: ["State Management", "React", "Redux"]
  },
  {
    slug: "common-frontend-mistakes",
    title: "Common Frontend Mistakes I Made (And How You Can Avoid Them)",
    excerpt: "Honest reflections on the errors that taught me the most—from premature optimization to ignoring accessibility.",
    content: `I've made every mistake in the book. Here are the ones that taught me the most, so you don't have to learn them the hard way.

## Mistake #1: Premature Optimization

I once spent three days implementing virtual scrolling for a list of 50 items. The performance gain was unmeasurable. I should have waited until there was an actual problem.

**Lesson**: Measure before optimizing. Most performance problems are imaginary.

## Mistake #2: Ignoring Accessibility Until the End

"We'll add accessibility later" is a lie. Later never comes, and retrofitting a11y is 10x harder than building it in.

**Lesson**: Semantic HTML, keyboard navigation, and ARIA labels from day one.

## Mistake #3: Not Testing on Real Devices

My beautiful animation that ran at 60fps on my M1 MacBook ran at 15fps on a mid-range Android. Oops.

**Lesson**: The devices your users have are not the devices you develop on.

## Mistake #4: Over-Engineering Components

I built a Button component with 23 props. It could do everything. Nobody could understand it.

**Lesson**: Simple components that compose are better than complex components that configure.

## Mistake #5: Copying Code Without Understanding

Stack Overflow is a tool, not a crutch. Every time I copy-pasted without understanding, it came back to bite me during debugging.

**Lesson**: If you can't explain the code, you don't own the code.

## Mistake #6: Neglecting Error States

The happy path is 20% of the user experience. What happens when the API fails? When the user has no data? When they're offline?

**Lesson**: Design for failure first, success second.`,
    coverImage: "/assets/generated_images/frontend_mistakes_blog_cover.png",
    publishedAt: new Date("2025-11-02"),
    tags: ["Learning", "Career", "Best Practices"]
  },
  {
    slug: "accessibility-what-i-actually-do",
    title: "Accessibility in Frontend Development: What I Actually Do",
    excerpt: "Beyond theory—practical implementation of semantic HTML, ARIA labels, keyboard navigation, and color contrast in real projects.",
    content: `Accessibility (a11y) isn't a checkbox. It's a practice that makes better experiences for everyone. Here's what I actually implement in every project.

## Semantic HTML First

Before reaching for ARIA, I use the right HTML elements:

\`\`\`html
<!-- Bad: div soup -->
<div onclick="submit()">Submit</div>

<!-- Good: semantic elements -->
<button type="submit">Submit</button>
\`\`\`

Buttons should be buttons. Links should be links. Headers should use h1-h6. This alone solves 80% of accessibility issues.

## Keyboard Navigation

Every interactive element must be:
- Focusable (in a logical order)
- Operable (Enter/Space for buttons, Arrow keys for menus)
- Visible (focus indicators that users can actually see)

I test by unplugging my mouse and navigating with just the keyboard.

## Color Contrast

I use tools like the WebAIM contrast checker to ensure:
- Normal text: 4.5:1 minimum ratio
- Large text: 3:1 minimum ratio
- UI components: 3:1 minimum ratio

My beautiful light gray on white? Failed. I adjusted.

## ARIA When Necessary

ARIA is for filling gaps, not replacing HTML:

\`\`\`jsx
<div 
  role="alert" 
  aria-live="polite"
>
  Form submitted successfully!
</div>
\`\`\`

Use aria-label for icon buttons, aria-describedby for form hints, aria-expanded for collapsible sections.

## Testing With Screen Readers

I regularly test with VoiceOver (Mac) and NVDA (Windows). The experience is often humbling—what seems obvious visually is confusing when read aloud.

Accessibility is empathy in code.`,
    coverImage: "/assets/generated_images/accessibility_blog_cover.png",
    publishedAt: new Date("2025-10-15"),
    tags: ["Accessibility", "HTML", "UX"]
  },
  {
    slug: "production-ready-frontend",
    title: "How I Build Frontend Projects That Look Production-Ready",
    excerpt: "The details that separate amateur from professional—loading states, error handling, empty states, and UI polish.",
    content: `The difference between a demo and a production app is in the details. Here's what I add to make projects feel truly finished.

## Loading States Everywhere

Every async operation needs a loading state:
- Skeleton screens for content loading
- Spinner or progress bar for actions
- Disabled buttons during submission

\`\`\`jsx
<Button disabled={isSubmitting}>
  {isSubmitting ? <Spinner /> : 'Submit'}
</Button>
\`\`\`

## Error Handling That Helps

"Something went wrong" helps no one. I show:
- What went wrong (in human language)
- What the user can do about it
- A retry button when applicable

## Empty States That Guide

An empty list isn't just blank—it's an opportunity:
- Explain what will appear here
- Guide users to create their first item
- Use illustrations to add personality

## Micro-Interactions

Small animations that provide feedback:
- Button press effect
- Form field focus transitions
- Success checkmarks
- Hover state previews

## Form Polish

Professional forms have:
- Real-time validation (not just on submit)
- Clear error messages next to the field
- Success confirmation
- Disabled submit until valid
- Preserved input on errors

## The 90/90 Rule

The first 90% of the project takes 90% of the time. The remaining 10% of polish takes another 90% of the time.

Budget for polish. It's what separates good from great.`,
    coverImage: "/assets/generated_images/production_ready_blog_cover.png",
    publishedAt: new Date("2025-09-28"),
    tags: ["UI/UX", "Polish", "Best Practices"]
  },
  {
    slug: "frontend-learning-system",
    title: "My Frontend Learning System: How I Improve Without Burning Out",
    excerpt: "A sustainable approach to continuous improvement—balancing deep work, exploration, and avoiding tutorial hell.",
    content: `The frontend landscape changes constantly. Here's how I keep learning without losing my mind.

## The 70-20-10 Rule

I allocate my learning time:
- **70%**: Deepening skills I already use (React, CSS, TypeScript)
- **20%**: Adjacent skills that enhance my work (design, testing, DevOps)
- **10%**: Experimental exploration (new frameworks, bleeding-edge tools)

This keeps me relevant without chasing every new trend.

## Avoiding Tutorial Hell

Tutorials feel productive but often aren't. My rule: for every hour of tutorials, spend two hours building something without guidance.

Struggle is where learning happens.

## Building in Public

I share what I learn on Twitter and in blog posts. This:
- Forces me to understand deeply enough to explain
- Creates accountability
- Connects me with others learning similar things

## The "Just Ship It" Deadline

Every side project gets a 2-week deadline. If it's not shipped by then, I move on. Perfect is the enemy of good, and finished projects teach more than abandoned ones.

## Sustainable Pace

I don't code 7 days a week. I take breaks. I have hobbies outside tech. Burnout kills creativity and makes learning feel like a chore.

## My Daily Learning Habit

15 minutes every morning:
- Read one article from my saved list
- Skim the top of Hacker News
- Check one GitHub repo I'm watching

Small, consistent effort beats sporadic marathons.

## Remember: You Can't Know Everything

Frontend is vast. It's okay to not know GraphQL, or Three.js, or the latest meta-framework. Expertise is narrow and deep, not wide and shallow.

Pick your lane. Go deep. The rest will come when needed.`,
    coverImage: "/assets/generated_images/learning_system_blog_cover.png",
    publishedAt: new Date("2025-09-12"),
    tags: ["Learning", "Career", "Productivity"]
  }
];
