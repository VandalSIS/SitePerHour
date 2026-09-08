import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-6xl font-heading font-bold text-gradient mb-4">404</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Page not found. The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/en"
        className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
