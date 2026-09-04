# Shine Academy BD (starter)

Next.js 14 (App Router) + TypeScript + Tailwind CSS দিয়ে বানানো একটা e‑learning ধরনের ওয়েবসাইট টেমপ্লেট — treasureshinebd.com এর লেআউট (হোম, About, Contact, Courses, Login, SignUp) অনুসরণ করে বানানো, কিন্তু নিজস্ব কনটেন্ট/ব্র্যান্ডিং দিয়ে।

## লোকালি রান করা

```bash
npm install
npm run dev
```

http://localhost:3000 এ ওপেন হবে।

## Vercel এ ডিপ্লয় করা

**উপায় ১ — Vercel CLI দিয়ে**

```bash
npm install -g vercel
vercel login
vercel
```

**উপায় ২ — GitHub থেকে (সবচেয়ে সহজ)**

1. এই ফোল্ডারটা GitHub এ একটা নতুন repo তে push করো।
2. https://vercel.com এ গিয়ে "Add New Project" চাপো।
3. তোমার GitHub repo সিলেক্ট করো — Vercel অটোমেটিক্যালি বুঝে যাবে এটা Next.js প্রজেক্ট (Build Command: `next build`, Output: `.next`)।
4. "Deploy" চাপলেই একটা লাইভ URL পাবে (যেমন `your-project.vercel.app`)।
5. পরে চাইলে Settings → Domains থেকে নিজের ডোমেইন (যেমন `treasureshinebd.com`) যোগ করতে পারো।

## পরে যা যোগ করতে হবে (production এর জন্য)

- **Login/SignUp**: এখন এগুলো শুধু UI ফর্ম, কোনো backend নাই। Auth এর জন্য NextAuth.js, Clerk, অথবা Firebase Auth ব্যবহার করতে পারো।
- **Contact ফর্ম**: এখন সাবমিট হ্যান্ডলার নাই। সহজ সমাধান — Formspree/Web3Forms ব্যবহার করা, অথবা একটা Next.js API route (`app/api/contact/route.ts`) বানিয়ে ইমেইল পাঠানো।
- **Courses ডাটা**: এখন কোডে হার্ডকোড করা আছে। বাস্তবে একটা ডাটাবেজ (Supabase/MongoDB) বা CMS (Sanity/Strapi) থেকে আনতে পারো।
- **পেমেন্ট**: কোর্স বিক্রি করতে চাইলে bKash/Nagad merchant API অথবা SSLCommerz (বাংলাদেশে জনপ্রিয় payment gateway) ইন্টিগ্রেট করতে হবে।
- **ছবি/লোগো**: `public/` ফোল্ডারে নিজের লোগো ও ছবি রেখে কম্পোনেন্টে `next/image` দিয়ে ব্যবহার করো।

## গুরুত্বপূর্ণ নোট

treasureshinebd.com এর হুবহু কপি (তাদের লোগো, ছবি, টেক্সট কনটেন্ট) ব্যবহার করা কপিরাইট লঙ্ঘন হতে পারে। এই টেমপ্লেটে একই ধরনের লেআউট/স্ট্রাকচার রাখা হয়েছে কিন্তু কনটেন্ট, ব্র্যান্ডিং এবং কালার নিজের মতো বদলে নিতে হবে।
