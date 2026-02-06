import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import BlogCard from "../components/BlogCard";
import posts from "../data/blog";

export default function BlogPage() {
  return (
    <Layout title="Blog" description="Technical writing by Mugisha Micheal.">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h1 className="section-title">Technical Writing</h1>
          <p className="section-subtitle mt-4">
            Insights on system design, project architecture, and security best practices for modern web teams.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.1}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
