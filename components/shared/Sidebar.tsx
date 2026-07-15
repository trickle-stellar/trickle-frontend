'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/streams', label: 'Streams' },
  { href: '/multistreams', label: 'Multistreams' },
  { href: '/vesting', label: 'Vesting' },
  { href: '/nfts', label: 'Stream NFTs' },
  { href: '/settings', label: 'Settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-shrink-0 border-r border-stellar-border bg-stellar-darker lg:block">
      <div className="flex h-full flex-col p-4">
        <Link href="/" className="mb-8 px-3 text-xl font-bold text-white">
          <span className="text-stellar-blue">Trickle</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-3 py-2 text-sm transition ${
                  isActive
                    ? 'bg-stellar-blue/10 text-stellar-blue'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* TODO: Add wallet connection status at bottom */}
      </div>
    </aside>
  );
}
