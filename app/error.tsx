"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      
    >
      <div className="flex flex-col items-center gap-4 text-center px-4">
        <div className="text-4xl">⚠️</div>
        <h2 className="text-lg font-semibold text-white">Something went wrong</h2>
        <p className="text-sm text-white/50 max-w-md">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="mt-2 px-4 py-2 text-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
