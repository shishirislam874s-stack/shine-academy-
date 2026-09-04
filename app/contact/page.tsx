export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold text-brand-dark">Contact Us</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-md border px-4 py-2 focus:border-brand focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-md border px-4 py-2 focus:border-brand focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full rounded-md border px-4 py-2 focus:border-brand focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-brand px-6 py-2 text-white hover:bg-brand-dark"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
