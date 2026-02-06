export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="glass rounded-2xl p-6 flex flex-col gap-4">
      <blockquote className="text-sm text-primary-700">“{testimonial.quote}”</blockquote>
      <figcaption className="text-sm font-semibold text-primary-900">
        {testimonial.name} · <span className="text-primary-600 font-normal">{testimonial.title}</span>
      </figcaption>
    </figure>
  );
}
