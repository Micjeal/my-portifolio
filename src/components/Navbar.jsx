import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV & Testimonials" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/40 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="font-heading font-semibold text-primary-900 text-lg">
          Mugisha Micheal
        </Link>
        <button
          type="button"
          className="md:hidden text-primary-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-primary-900 mb-1" />
          <span className="block w-6 h-0.5 bg-primary-900 mb-1" />
          <span className="block w-6 h-0.5 bg-primary-900" />
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-primary-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent-500 transition">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-white/90 border-t border-white/40 shadow-lg">
          <div className="flex flex-col gap-3 px-6 py-4 text-primary-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-accent-500 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
