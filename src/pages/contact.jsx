import { useState } from "react";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";

const initialState = {
  name: "",
  email: "",
  message: ""
};

export default function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout title="Contact" description="Get in touch with Mugisha Micheal.">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle mt-4">
            Let&apos;s collaborate on secure, scalable web platforms. Share your project goals and I&apos;ll respond promptly.
          </p>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 mt-10 space-y-6">
            <div>
              <label className="text-sm font-semibold text-primary-900" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-primary-900/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-semibold text-primary-900" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-primary-900/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-semibold text-primary-900" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-primary-900/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-primary-900 text-white font-semibold hover:bg-primary-800 transition"
            >
              Send message
            </button>
            {submitted && <p className="text-sm text-accent-500">Thanks! Your message has been sent.</p>}
          </form>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-primary-700">
            <a href="https://github.com" className="hover:text-accent-500 transition">
              GitHub
            </a>
            <a href="https://linkedin.com" className="hover:text-accent-500 transition">
              LinkedIn
            </a>
            <a href="mailto:hello@mugishamicheal.dev" className="hover:text-accent-500 transition">
              hello@mugishamicheal.dev
            </a>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
