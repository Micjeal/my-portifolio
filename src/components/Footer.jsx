import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-primary-700">
        <p>© 2024 Mugisha Micheal. Crafted for secure, scalable web experiences.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" className="hover:text-accent-500 transition">
            GitHub
          </Link>
          <Link href="https://linkedin.com" className="hover:text-accent-500 transition">
            LinkedIn
          </Link>
          <Link href="mailto:hello@mugishamicheal.dev" className="hover:text-accent-500 transition">
            hello@mugishamicheal.dev
          </Link>
        </div>
      </div>
    </footer>
  );
}
