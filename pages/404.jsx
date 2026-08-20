import Link from 'next/link';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div className="h-full bg-primary/30 flex items-center justify-center text-center">
      <Seo title="Page not found" description="This page could not be found." />
      <div className="container mx-auto flex flex-col items-center gap-4">
        <h1 className="h2">
          404<span className="text-accent">.</span>
        </h1>
        <p className="max-w-md">
          This page doesn&apos;t exist — it may have been moved or never built.
        </p>
        <Link
          href="/"
          className="mt-4 rounded-full border border-white/50 px-8 py-3 transition-all duration-300 hover:border-accent hover:text-accent"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
