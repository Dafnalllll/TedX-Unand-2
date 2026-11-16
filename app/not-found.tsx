import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black px-6 font-sans text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="coming-soon-glow absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e31b23]/10 blur-[100px]" />
        <div className="coming-soon-line absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#e31b23]/70 to-transparent" />
      </div>

      <section
        aria-labelledby="not-found-title"
        className="coming-soon-content relative z-10 text-center"
      >
        <p className="coming-soon-item mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#e31b23] sm:text-sm">
          TEDx Universitas Andalas
        </p>
        <p
          aria-hidden="true"
          className="coming-soon-item text-8xl font-bold tracking-[-0.08em] text-white sm:text-9xl"
        >
          4<span className="text-[#e31b23]">0</span>4
        </p>
        <h1
          id="not-found-title"
          className="coming-soon-item mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Page not found
        </h1>
        <p className="coming-soon-item mx-auto mt-4 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
          The page you are looking for doesn’t exist or may have been moved.
        </p>
        <Link
          aria-label="Back to home"
          className="coming-soon-item mt-10 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#e31b23]/70 hover:bg-[#e31b23]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e31b23]"
          href="/"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] stroke-width-2"
            viewBox="0 0 24 24"
          >
            <path d="m15 18-6-6 6-6M9 12h12" />
          </svg>
          Back to Home
        </Link>
      </section>
    </main>
  );
}
