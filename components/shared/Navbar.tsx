import Link from 'next/link';
import { WalletButton } from '@/components/features/wallet/WalletButton';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-stellar-border bg-stellar-darker/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-white">
          <span className="text-stellar-blue">Trickle</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/features"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            About
          </Link>
          <a
            href="https://github.com/trickle-stellar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            GitHub
          </a>
        </div>

        <WalletButton />
      </div>
    </nav>
  );
}
