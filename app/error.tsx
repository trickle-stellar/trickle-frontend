'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-red-400">Something went wrong</h1>
      <p className="text-gray-400">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 rounded-lg bg-stellar-blue px-6 py-2 text-white transition hover:bg-stellar-blue/80"
      >
        Try again
      </button>
    </div>
  );
}
