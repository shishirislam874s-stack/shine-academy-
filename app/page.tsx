import Link from "next/link";

const courses = [
  { slug: "quran-recitation", title: "Quran Recitation" },
  { slug: "youtube-content-creation", title: "YouTube Content Creation" },
  { slug: "graphic-design", title: "Graphic Design" },
  { slug: "digital-marketing", title: "Digital Marketing" },
];

const faqs = [
  {
    q: "What is Shine Academy BD?",
    a: "It is a platform where you can learn digital skills such as YouTube, graphic design, and digital marketing, and turn what you learn into income.",
  },
  {
    q: "Do we need to pay any admission fee?",
    a: "Some courses are free; others require a small admission fee, shown on each course page.",
  },
  {
    q: "Can I learn this from home?",
    a: "Yes — everything is online, so you can learn from your phone or laptop at home.",
  },
  {
    q: "What do I need to join?",
    a: "A smartphone or laptop, a stable internet connection, and basic details like your name, email, and phone number.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand/10 to-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center">
          <h1 className="text-3xl font-extrabold text-brand-dark md:text-5xl">
            Welcome to Shine Academy BD
            <br /> E-Learning Platform
          </h1>
          <p className="max-w-2xl text-gray-600">
            A trusted Bangladeshi online platform to learn and earn using your
            free time — in your own language, on your smartphone.
          </p>
          <div className="flex gap-3">
            <Link href="/login" className="rounded-md bg-brand px-6 py-2 text-white hover:bg-brand-dark">
              Login
            </Link>
            <Link href="/signup" className="rounded-md border border-brand px-6 py-2 text-brand hover:bg-brand hover:text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
        {[
          { label: "20+ Courses", desc: "Wide range of skill-building courses" },
          { label: "Expert Mentors", desc: "Learn directly from professionals" },
          { label: "Lifetime Access", desc: "Revisit course materials anytime" },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border p-6 text-center shadow-sm">
            <p className="text-lg font-semibold text-brand-dark">{item.label}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Popular courses */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold text-brand-dark">Popular Courses</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <Link
              key={c.slug}
              href={`/courses/${c.slug}`}
              className="rounded-lg border p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 h-28 rounded-md bg-brand/10" />
              <p className="font-medium">{c.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold text-brand-dark">
          Frequently Asked Questions
        </h2>
        <div className="divide-y rounded-lg border">
          {faqs.map((f) => (
            <details key={f.q} className="group p-4">
              <summary className="cursor-pointer list-none font-medium marker:content-none">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
