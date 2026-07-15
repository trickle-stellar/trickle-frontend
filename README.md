# Trickle Frontend

Web app for Trickle — continuous payment streaming on Stellar.

## Overview

This is the frontend for the Trickle streaming payments platform. It connects to the [trickle-backend](../trickle-backend) API and interacts with Soroban smart contracts via the Freighter wallet extension.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.5 |
| Styling | Tailwind CSS 3.4 |
| Wallet | Freighter |
| Blockchain | Stellar / Soroban (@stellar/stellar-sdk 13) |
| State | React Context (no Redux) |

## Architecture

```
Browser
  │
  ├── App Router (Server Components + Client Islands)
  │     ├── (marketing)/  — public pages, no auth
  │     └── (app)/        — authenticated pages, wallet required
  │
  ├── Providers
  │     ├── WalletProvider  — Freighter connection state
  │     └── ThemeProvider   — dark/light mode
  │
  ├── Services layer
  │     └── One file per backend module → typed fetch calls
  │
  └── Stellar SDK + Freighter
        └── Transaction building + wallet signing
```

**Key patterns:**
- **Server Components** by default — only add `'use client'` when needed (interactive forms, hooks, wallet)
- **Route groups** organize layouts — `(marketing)` gets Navbar/Footer, `(app)` gets Sidebar
- **Feature components** are domain-specific — one folder per feature (streams, vesting, etc.)
- **Service layer** returns mock data for now — all functions have TODO comments showing real endpoints
- **Claimable balance** always goes through real-time Soroban RPC — never cached

## Routes

### Marketing (public)

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page — hero, how it works, feature cards, CTA |
| `/features` | Features | Detailed product feature descriptions |
| `/about` | About | Project mission, team, roadmap |

### App (wallet required)

| Route | Page | Description |
|---|---|---|
| `/dashboard` | Dashboard | Wallet overview, active streams summary, recent activity |
| `/streams` | Streams | List user's streams (sent + received) |
| `/streams/new` | Create Stream | Form to create a new stream via factory contract |
| `/streams/[address]` | Stream Detail | Stream info, real-time balance, withdraw/pause/cancel |
| `/multistreams` | Multistreams | List multistreams |
| `/multistreams/new` | Create Multistream | Form to create a multistream with weighted recipients |
| `/multistreams/[address]` | Multistream Detail | Multistream info, recipients, per-recipient balances |
| `/vesting` | Vesting | List vesting schedules |
| `/vesting/new` | Create Vesting | Form to create a vesting schedule |
| `/vesting/[address]` | Vesting Detail | Vesting info, progress, claim/revoke |
| `/nfts` | Stream NFTs | List stream NFTs owned by user |
| `/nfts/[address]` | NFT Detail | NFT info, transfer, withdraw |
| `/settings` | Settings | API keys, theme, network, wallet info |

## Getting Started

```bash
cp .env.example .env    # edit with your values
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:3001/api/v1` |
| `NEXT_PUBLIC_STELLAR_NETWORK` | `testnet` or `mainnet` | `testnet` |
| `NEXT_PUBLIC_SOROBAN_RPC_URL` | Soroban RPC endpoint | `https://soroban-rpc.testnet.stellar.org` |
| `NEXT_PUBLIC_HORIZON_URL` | Horizon API endpoint | `https://horizon-testnet.stellar.org` |

## Project Structure

```
app/
├── layout.tsx                     # Root layout (providers, metadata)
├── loading.tsx                    # Global loading spinner
├── not-found.tsx                  # 404 page
├── error.tsx                      # Global error boundary
├── globals.css                    # Tailwind imports + CSS variables
├── (marketing)/
│   ├── layout.tsx                 # Navbar + Footer layout
│   ├── page.tsx                   # HOME — fully built
│   ├── features/page.tsx          # Placeholder
│   └── about/page.tsx             # Placeholder
└── (app)/
    ├── layout.tsx                 # Sidebar layout
    ├── loading.tsx
    ├── dashboard/page.tsx         # Placeholder
    ├── streams/                   # 3 pages (list, create, detail)
    ├── multistreams/              # 3 pages
    ├── vesting/                   # 3 pages
    ├── nfts/                      # 2 pages (list, detail)
    └── settings/page.tsx          # Placeholder
components/
├── ui/                            # Button, Input, Card, Modal, Badge
├── shared/                        # Navbar, Footer, Sidebar
└── features/                      # WalletButton, StreamCard, etc.
hooks/                             # useWallet, useApi
services/                          # auth, streams, multistreams, vesting, streamNft, fees, indexer
types/                             # TypeScript interfaces per domain
lib/                               # constants, utils, stellar helpers
providers/                         # WalletProvider, ThemeProvider
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT
