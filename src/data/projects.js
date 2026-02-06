const projects = [
  {
    slug: "secure-saas-dashboard",
    title: "Secure SaaS Command Center",
    description: "Role-based SaaS dashboard built for compliance-ready analytics and secure workflows.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    category: "React",
    summary:
      "A multi-tenant SaaS platform that unifies security audits, usage analytics, and workflow approvals into a single interface.",
    problem:
      "Enterprise teams lacked a unified, secure dashboard to manage audits and compliance workflows across products.",
    solution:
      "Designed a modular architecture with policy-driven access control, async event ingestion, and a responsive UI optimized for data density.",
    architecture:
      "Microservice-ready API gateway, RBAC middleware, and cached analytics pipeline with role-aware views.",
    outcome:
      "Reduced audit turnaround by 38% and improved stakeholder visibility through configurable dashboards.",
    github: "https://github.com/",
    live: "https://example.com/",
    images: ["/projects/saas-dashboard.svg", "/projects/saas-metrics.svg"]
  },
  {
    slug: "secure-payments-platform",
    title: "Secure Payments Platform",
    description: "End-to-end payments flow with fraud monitoring, audit logging, and real-time alerts.",
    stack: ["React", "Node.js", "Redis", "Tailwind"],
    category: "Node",
    summary:
      "A security-first payments console that pairs fraud scoring with instant alerting and audit-ready logging.",
    problem:
      "The existing payment stack lacked real-time monitoring and centralized visibility for fraud risk.",
    solution:
      "Implemented event-driven risk scoring, encrypted logs, and modular alert workflows with fine-grained access.",
    architecture:
      "Event streams, Redis-backed alert queues, and hardened REST APIs with rotating tokens.",
    outcome:
      "Increased fraud detection accuracy by 45% while lowering false positives through adaptive rules.",
    github: "https://github.com/",
    live: "https://example.com/",
    images: ["/projects/payments-flow.svg", "/projects/payments-alerts.svg"]
  },
  {
    slug: "architecture-planning-suite",
    title: "Architecture Planning Suite",
    description: "System architecture toolkit for documenting services, dependencies, and rollout plans.",
    stack: ["Next.js", "TypeScript", "GraphQL", "Tailwind"],
    category: "JavaScript",
    summary:
      "A planning suite that helps engineering teams map services, dependencies, and rollout stages.",
    problem:
      "Engineering leaders needed a shared space to visualize architecture and release dependencies.",
    solution:
      "Built interactive diagrams, timeline projections, and collaboration-ready notes within a secure workspace.",
    architecture:
      "GraphQL federation with caching and a component-driven UI library for reusable diagrams.",
    outcome:
      "Cut planning cycles by 27% and improved alignment between product and engineering.",
    github: "https://github.com/",
    live: "https://example.com/",
    images: ["/projects/architecture-suite.svg", "/projects/architecture-timeline.svg"]
  }
];

export const projectFilters = ["All", "React", "Node", "JavaScript"];

export default projects;
