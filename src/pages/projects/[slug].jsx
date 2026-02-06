import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import Reveal from "../../components/Reveal";
import projects from "../../data/projects";

export default function ProjectCaseStudy({ project }) {
  if (!project) {
    return (
      <Layout title="Project">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="section-title">Project not found</h1>
          <Link href="/projects" className="text-accent-500 font-semibold">
            Back to projects
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title={project.title} description={project.description}>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <Link href="/projects" className="text-sm text-accent-500 font-semibold">
            ← Back to projects
          </Link>
          <h1 className="section-title mt-4">{project.title}</h1>
          <p className="section-subtitle mt-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary-900/5 text-primary-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-heading font-semibold text-primary-900">Project Overview</h2>
              <p className="text-sm text-primary-700 mt-4">{project.summary}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-heading font-semibold text-primary-900">Problem Statement</h2>
              <p className="text-sm text-primary-700 mt-4">{project.problem}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-heading font-semibold text-primary-900">Solution</h2>
              <p className="text-sm text-primary-700 mt-4">{project.solution}</p>
              <p className="text-sm text-primary-700 mt-4">{project.architecture}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-heading font-semibold text-primary-900">Outcome & Impact</h2>
              <p className="text-sm text-primary-700 mt-4">{project.outcome}</p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12">
            <h2 className="text-2xl font-heading font-semibold text-primary-900">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {project.images.map((image) => (
                <div key={image} className="glass rounded-2xl overflow-hidden">
                  <Image src={image} alt={project.title} width={800} height={500} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={project.github}
              className="px-6 py-3 rounded-full bg-primary-900 text-white font-semibold hover:bg-primary-800 transition"
            >
              GitHub Repository
            </Link>
            <Link
              href={project.live}
              className="px-6 py-3 rounded-full border border-primary-900/20 text-primary-900 font-semibold hover:border-primary-900 transition"
            >
              Live Demo
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((item) => item.slug === params.slug) || null;
  return {
    props: {
      project
    }
  };
}
