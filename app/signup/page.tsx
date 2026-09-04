import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="mb-6 text-2xl font-bold text-brand-dark">Sign Up</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border px-4 py-2 focus:border-brand focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border px-4 py-2 focus:border-brand focus:outline-none"
        />
        <input
          type="tel"
          placeholder="WhatsApp Number"
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
          Create Account
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-brand hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
