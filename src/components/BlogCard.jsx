export default function BlogCard({ post }) {
  return (
    <article className="glass rounded-2xl p-6 flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between text-xs text-primary-600">
        <span className="uppercase tracking-wide text-accent-500 font-semibold">{post.tag}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <h3 className="text-xl font-heading font-semibold text-primary-900">{post.title}</h3>
      <p className="text-sm text-primary-700">{post.excerpt}</p>
      <span className="text-accent-500 text-sm font-semibold">Read article →</span>
    </article>
  );
}
