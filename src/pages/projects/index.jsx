import { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";
import Reveal from "../../components/Reveal";
import projects, { projectFilters } from "../../data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <Layout title="Projects" description="Selected projects by Mugisha Micheal.">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle mt-4">
            A curated selection of secure dashboards, SaaS platforms, and system architecture work.
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-3 mt-8">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${
                filter === item
                  ? "bg-primary-900 text-white border-primary-900"
                  : "bg-white text-primary-700 border-white/60 hover:border-primary-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
