import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-stellar-border bg-stellar-darker">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              <span className="text-stellar-blue">Trickle</span>
            </h3>
            <p className="text-sm text-gray-400">
              Continuous payment streaming on the Stellar blockchain.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/trickle-stellar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://soroban.stellar.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Soroban Docs
                </a>
              </li>
              <li>
                <a
                  href="https://stellar.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Stellar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-stellar-border pt-6 text-center text-xs text-gray-500">
          Open source under MIT License
        </div>
      </div>
    </footer>
  );
}
