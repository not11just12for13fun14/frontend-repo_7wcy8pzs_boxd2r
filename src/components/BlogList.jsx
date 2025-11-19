import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function BlogList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${API}/api/posts`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Blog posts</h2>
        <p className="text-slate-600 mt-2">Thoughts and process notes from the studio.</p>
        {loading ? (
          <p className="mt-8 text-slate-600">Loading…</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.length === 0 && (
              <div className="col-span-full text-slate-600">No posts yet. Create one via the backend or I can add a starter post if you like.</div>
            )}
            {items.map((p) => (
              <article key={p.id} className="rounded-xl border border-slate-200 hover:shadow-md transition overflow-hidden">
                {p.cover_image && (
                  <img src={p.cover_image} alt={p.title} className="w-full aspect-[4/3] object-cover" />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mt-1">{p.content}</p>
                  {p.tags?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
