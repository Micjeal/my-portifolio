import Layout from "../components/Layout";
import Reveal from "../components/Reveal";

const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express", "REST APIs", "Authentication", "RBAC"],
  "Tools & Practices": ["Git", "CI/CD", "System Design", "Security Audits", "Testing"]
};

export default function AboutPage() {
  return (
    <Layout title="About" description="Professional background and skills of Mugisha Micheal.">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle mt-4">
            I am Mugisha Micheal, a software engineer and full-stack web developer focused on building secure,
            scalable web applications. My work blends thoughtful system architecture with polished user experiences,
            enabling teams to deliver reliable SaaS platforms, dashboards, and role-based systems.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-heading font-semibold text-primary-900">Skills</h2>
              <div className="mt-6 space-y-6">
                {Object.entries(skills).map(([category, list]) => (
                  <div key={category}>
                    <h3 className="text-sm uppercase tracking-widest text-accent-500 font-semibold">{category}</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {list.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary-900/5 text-primary-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass rounded-3xl p-8 h-full">
              <h2 className="text-2xl font-heading font-semibold text-primary-900">Education</h2>
              <div className="mt-6 border-l-2 border-accent-500/40 pl-6">
                <div className="pb-6">
                  <p className="text-sm uppercase tracking-widest text-accent-500 font-semibold">2023 - 2024</p>
                  <h3 className="text-lg font-semibold text-primary-900 mt-2">
                    Diploma in Software Engineering
                  </h3>
                  <p className="text-sm text-primary-700">ISBAT University</p>
                  <p className="text-sm text-primary-700 mt-2">
                    Focused on system architecture, secure application development, and modern web frameworks.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
