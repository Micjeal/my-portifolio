import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import TestimonialCard from "../components/TestimonialCard";
import testimonials from "../data/testimonials";

export default function CvPage() {
  return (
    <Layout title="CV" description="Curriculum vitae and testimonials for Mugisha Micheal.">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="section-title">CV & Testimonials</h1>
              <p className="section-subtitle mt-4">
                Download a PDF resume and read what collaborators have said about working with me.
              </p>
            </div>
            <a
              href="/Mugisha-Micheal-CV.pdf"
              className="px-6 py-3 rounded-full bg-accent-500 text-primary-900 font-semibold shadow-lg hover:-translate-y-0.5 transition"
            >
              Download PDF CV
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
