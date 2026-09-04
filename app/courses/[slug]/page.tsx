const courses: Record<string, { title: string; desc: string }> = {
  "quran-recitation": {
    title: "Quran Recitation",
    desc: "Learn correct Quran recitation step by step with guided lessons.",
  },
  "youtube-content-creation": {
    title: "YouTube Content Creation",
    desc: "Plan, shoot, and edit videos that help a channel grow.",
  },
  "graphic-design": {
    title: "Graphic Design",
    desc: "Design fundamentals using free and paid tools.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    desc: "Facebook ads, SEO, and content marketing fundamentals.",
  },
};

export function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({ slug }));
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = courses[params.slug] ?? {
    title: "Course not found",
    desc: "This course does not exist yet.",
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="mb-6 h-48 rounded-lg bg-brand/10" />
      <h1 className="mb-4 text-3xl font-bold text-brand-dark">{course.title}</h1>
      <p className="text-gray-600">{course.desc}</p>
      <button className="mt-6 rounded-md bg-brand px-6 py-2 text-white hover:bg-brand-dark">
        Enroll Now
      </button>
    </div>
  );
}
