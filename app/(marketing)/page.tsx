import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

/**
 * HOME PAGE — Fully implemented.
 *
 * Landing page with hero, how-it-works, feature cards, and CTA.
 * Static marketing content only, no mock data.
 */
export default function HomePage() {
  return (
    <div className="dark bg-stellar-darker">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Stream money
          <br />
          <span className="bg-gradient-to-r from-stellar-blue to-stellar-purple bg-clip-text text-transparent">
            in real-time
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
          Pay per second, not per transaction. Trickle lets you send, receive,
          and stream continuous payments on the Stellar blockchain — salary by
          the second, subscriptions by the minute.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg">Launch App</Button>
          </Link>
          <Link href="/features">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          How it works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-stellar-blue/20 text-stellar-blue">
              1
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Connect your wallet
            </h3>
            <p className="text-gray-400">
              Link your Freighter wallet to get started. No emails, no
              passwords — just your Stellar address.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-stellar-blue/20 text-stellar-blue">
              2
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Create a stream
            </h3>
            <p className="text-gray-400">
              Set a recipient, asset, amount, and duration. Tokens flow
              continuously from start to end.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-stellar-blue/20 text-stellar-blue">
              3
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Withdraw anytime
            </h3>
            <p className="text-gray-400">
              Recipients can claim accrued tokens at any point. No waiting
              until the stream ends.
            </p>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Built for Stellar
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card header="Payment Streams">
            <p className="text-gray-400">
              Continuous, per-second payments with real-time balance tracking.
              Withdraw accrued funds at any time.
            </p>
          </Card>
          <Card header="Multi-Streams">
            <p className="text-gray-400">
              Split a single funded stream across multiple recipients with
              weighted distribution.
            </p>
          </Card>
          <Card header="Vesting">
            <p className="text-gray-400">
              Time-locked token release with cliff periods and linear vesting
              schedules.
            </p>
          </Card>
          <Card header="Stream NFTs">
            <p className="text-gray-400">
              Wrap any stream as a tradeable NFT. Transfer ownership of
              ongoing payment streams.
            </p>
          </Card>
          <Card header="Low Fees">
            <p className="text-gray-400">
              Stellar&apos;s near-zero transaction fees make micro-streaming
              economically viable.
            </p>
          </Card>
          <Card header="Open Source">
            <p className="text-gray-400">
              Fully open-source smart contracts, backend, and frontend.
              Contribute on GitHub.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Ready to start streaming?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-gray-400">
          Connect your wallet and create your first stream in under a minute.
          Testnet available for experimenting.
        </p>
        <Link href="/dashboard">
          <Button size="lg">Get Started</Button>
        </Link>
      </section>
    </div>
  );
}
