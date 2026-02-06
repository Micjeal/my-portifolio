import Link from "next/link";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found" description="The page you are looking for does not exist.">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="glass rounded-3xl p-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-accent-500">404 Error</p>
            <h1 className="section-title mt-4">Page not found</h1>
            <p className="section-subtitle mt-4">
              Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.
            </p>
            <Link
              href="/"
              className="inline-flex mt-8 px-6 py-3 rounded-full bg-primary-900 text-white font-semibold hover:bg-primary-800 transition"
            >
              Return home
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
