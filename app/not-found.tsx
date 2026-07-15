import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-stellar-blue">404</h1>
      <p className="text-lg text-gray-400">Page not found</p>
      <Link
        href="/"
        className="mt-4 rounded-lg bg-stellar-blue px-6 py-2 text-white transition hover:bg-stellar-blue/80"
      >
        Go home
      </Link>
    </div>
  );
}
