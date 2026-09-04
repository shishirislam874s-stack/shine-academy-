export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg font-semibold">Shine Academy BD</h3>
          <p className="text-sm text-gray-300">
            An online learning platform to build digital skills from your mobile phone, in your own language.
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Company</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/terms" className="hover:text-white">Terms &amp; Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Follow</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
            <li><a href="#" className="hover:text-white">WhatsApp Channel</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Shine Academy BD. All rights reserved.
      </div>
    </footer>
  );
}
