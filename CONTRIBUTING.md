# Contributing to Trickle Frontend

Welcome — thanks for helping build Trickle. This guide covers the Next.js frontend.

## Prerequisites

- Node.js 18+
- npm or pnpm
- Freighter browser extension (for wallet testing)

## Getting Started

```bash
cp .env.example .env
npm install
npm run dev
```

The app starts at `http://localhost:3000`.

## Branch & Commit

```bash
git checkout -b feat/your-feature
git commit -m "feat(module): short description"
git push origin feat/your-feature
```

Open a PR against `main`.

## App Router Conventions

### Route Groups

- `(marketing)/` — public pages, shared Navbar + Footer layout
- `(app)/` — authenticated pages, shared Sidebar layout

URLs don't include the route group. `/dashboard` is at `/dashboard`, not `/(app)/dashboard`.

### Server vs Client Components

- **Server Components** (default) — no `'use client'` directive. Use for pages that just display data.
- **Client Components** — add `'use client'` at top. Use for interactive elements: forms, buttons with handlers, hooks.

If your page uses `useState`, `useEffect`, `useContext`, or event handlers, it needs `'use client'`.

### Layouts

Each route group has its own `layout.tsx`. Marketing pages get Navbar/Footer. App pages get Sidebar. The root layout wraps everything with providers (Wallet, Theme).

## How to Add a New Page

1. Create the `page.tsx` file in the appropriate route group:

```
app/(app)/new-feature/page.tsx     # → /new-feature
```

2. Add it to the Sidebar links in `components/shared/Sidebar.tsx`

3. Create a feature component if needed:

```
components/features/new-feature/NewFeatureCard.tsx
```

4. Add a service file:

```
services/newFeature.ts
```

5. Add types:

```
types/newFeature.ts
```

## How to Add a New Component

### UI Component (reusable)

Add to `components/ui/`:

```tsx
// components/ui/MyComponent.tsx
interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  return <div className="...">{title}</div>;
}
```

### Feature Component (domain-specific)

Add to `components/features/<domain>/`:

```tsx
// components/features/streams/MyFeature.tsx
'use client';

export function MyFeature() {
  // interactive component with hooks
}
```

## Service Layer Pattern

All API calls go through `services/`. Each file corresponds to a backend module:

```typescript
// services/streams.ts
import type { Stream } from '@/types/stream';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getStreamByAddress(address: string): Promise<Stream> {
  // TODO: GET ${API_URL}/streams/${address}
  // const res = await fetch(`${API_URL}/streams/${address}`);
  // return res.json();
  return { /* mock data */ };
}
```

When implementing, replace mock returns with real `fetch` calls and remove the TODO.

## Development Commands

```bash
npm run dev        # Development server (port 3000)
npm run build      # Production build
npm run lint       # ESLint
```

## Code Style

- **Tailwind only** — no external CSS files, no CSS modules
- **TypeScript props** — always define an interface for component props
- **Named exports** — `export function MyComponent` not `export default`
- **Imports** — use `@/` path alias: `import { Button } from '@/components/ui/Button'`

## Labels

| Label | Meaning |
|---|---|
| `frontend` | Frontend UI work |
| `good first issue` | Scoped to 1 component/page, clear spec |
| `wallet` | Freighter wallet integration |
| `bug` | Something broken |
| `design` | Needs styling/UX work |
