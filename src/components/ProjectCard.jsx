import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="group glass rounded-2xl p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary-900">
            {project.title}
          </h3>
          <p className="text-sm text-primary-700 mt-2">{project.description}</p>
        </div>
        <span className="text-xs uppercase tracking-wide text-accent-500">{project.category}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-xs font-medium bg-primary-900/5 text-primary-700"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-auto inline-flex items-center gap-2 text-accent-500 font-semibold text-sm pt-6"
      >
        View case study →
      </Link>
    </div>
  );
}
