import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function HomePage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"
          style={{ transform: `translateY(${offset}px)` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-accent-400"
          >
            Software Engineer | Full-Stack Web Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-4xl md:text-6xl font-heading font-semibold"
          >
            Mugisha Micheal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
          >
            Building secure, scalable, and user-focused web systems with clean architecture, thoughtful UX, and
            production-ready performance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-accent-500 text-primary-900 font-semibold shadow-lg hover:-translate-y-0.5 transition"
            >
              View Projects
            </Link>
            <Link
              href="/cv"
              className="px-6 py-3 rounded-full border border-white/50 text-white font-semibold hover:bg-white/10 transition"
            >
              Download CV
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="expertise" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="section-title">Secure systems, crafted end-to-end.</h2>
              <p className="section-subtitle mt-3 max-w-2xl">
                I specialize in full-stack web development with a strong focus on security, scalable architecture, and
                delightful interfaces.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-sm text-primary-700 max-w-sm">
              <p className="font-semibold text-primary-900">Primary Stack</p>
              <p className="mt-2">JavaScript · React · Next.js · Node.js · Tailwind CSS</p>
              <p className="mt-4 font-semibold text-primary-900">Focus Areas</p>
              <p className="mt-2">Secure web apps · Dashboards · SaaS platforms · Role-based systems</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white/70 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle mt-2">Real-world systems engineered for security and scale.</p>
              </div>
              <Link href="/projects" className="text-accent-500 font-semibold text-sm">
                Explore all projects →
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.1}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="glass rounded-3xl p-10 md:p-14 grid md:grid-cols-[1.5fr_1fr] gap-10">
            <div>
              <h2 className="section-title">Ready for your next big build?</h2>
              <p className="section-subtitle mt-3">
                Let&apos;s create secure, high-performing digital products that elevate your business. I collaborate with
                teams to ship clean, production-ready systems.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-primary-900 text-white font-semibold text-center hover:bg-primary-800 transition"
              >
                Schedule a call
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-full border border-primary-900/20 text-primary-900 font-semibold text-center hover:border-primary-900 transition"
              >
                Learn more about me
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
