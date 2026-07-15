import { Sidebar } from '@/components/shared/Sidebar';

/**
 * App layout — wraps all authenticated pages.
 *
 * TODO: Add auth guard
 *   - Check if wallet is connected
 *   - Redirect to / if not connected
 *   - Show loading state while checking
 */
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark flex min-h-screen bg-stellar-darker">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 lg:p-8">{children}</main>
    </div>
  );
}
