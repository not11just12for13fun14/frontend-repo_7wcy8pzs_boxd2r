export default function PostCard({ post }) {
  return (
    <article className="group rounded-xl border border-slate-200/70 p-4 bg-white/60 hover:bg-white transition-all shadow-sm hover:shadow-md">
      {post.cover_image && (
        <img src={post.cover_image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-3" />
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:underline underline-offset-4">{post.title}</h3>
      <p className="text-slate-700 text-sm line-clamp-3 mb-3">{post.content}</p>
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800">#{t}</span>
          ))}
        </div>
      )}
    </article>
  )
}
