import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-brand">
          Shine Academy BD
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="hover:text-brand">Home</Link>
          <Link href="/about" className="hover:text-brand">About</Link>
          <Link href="/courses" className="hover:text-brand">Courses</Link>
          <Link href="/contact" className="hover:text-brand">Contact</Link>
        </nav>
        <div className="flex gap-2">
          <Link
            href="/login"
            className="rounded-md border border-brand px-4 py-1.5 text-brand hover:bg-brand hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-brand px-4 py-1.5 text-white hover:bg-brand-dark"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
