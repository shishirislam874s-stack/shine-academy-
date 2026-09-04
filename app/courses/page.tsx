import Link from "next/link";

const courses = [
  { slug: "quran-recitation", title: "Quran Recitation", desc: "Learn correct Quran recitation step by step." },
  { slug: "youtube-content-creation", title: "YouTube Content Creation", desc: "Plan, shoot, and edit videos that grow a channel." },
  { slug: "graphic-design", title: "Graphic Design", desc: "Design basics using free and paid tools." },
  { slug: "digital-marketing", title: "Digital Marketing", desc: "Facebook, SEO, and content marketing fundamentals." },
];

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-brand-dark">All Courses</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="rounded-lg border p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 h-32 rounded-md bg-brand/10" />
            <p className="font-semibold">{c.title}</p>
            <p className="mt-1 text-sm text-gray-500">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
