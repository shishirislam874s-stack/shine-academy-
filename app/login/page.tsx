import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="mb-6 text-2xl font-bold text-brand-dark">Login</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border px-4 py-2 focus:border-brand focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md border px-4 py-2 focus:border-brand focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-brand px-4 py-2 text-white hover:bg-brand-dark"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-brand hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
