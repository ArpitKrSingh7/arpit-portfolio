import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      
    >
      <div className="flex flex-col items-center gap-4 text-center px-4">
        <div className="text-6xl font-bold text-white/10">404</div>
        <h2 className="text-lg font-semibold text-white">Page not found</h2>
        <p className="text-sm text-white/50 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
