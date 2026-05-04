import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[65vh] items-center justify-center">
      <div className="glass-card max-w-lg rounded-3xl p-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Page Not Found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you requested does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="focus-ring mt-6 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
