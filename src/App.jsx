import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import PostCard from './components/PostCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      setLoading(true)
      const res = await fetch(`${API_BASE}/api/posts`)
      if (!res.ok) throw new Error('Failed to load posts')
      const data = await res.json()
      setPosts(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-amber-50/70">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="mb-10">
          <div className="rounded-2xl p-8 bg-gradient-to-r from-amber-100 via-orange-100 to-rose-100 border border-amber-200/70">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              Welcome to my pottery journal
            </h1>
            <p className="text-slate-700 max-w-2xl">
              I share works-in-progress, glaze experiments, market days, and stories from the studio.
              Pull up a stool and browse the latest posts below.
            </p>
          </div>
        </section>

        {loading && <div className="text-slate-600">Loading posts…</div>}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded mb-6">
            {error}. Make sure the backend is running and VITE_BACKEND_URL is set.
          </div>
        )}

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
          {!loading && posts.length === 0 && !error && (
            <div className="col-span-full text-slate-600">
              No posts yet. Use the form below to add your first story!
            </div>
          )}
        </section>

        <section className="mt-10 border-t border-slate-200 pt-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Share a new post</h2>
          <PostForm onCreated={fetchPosts} />
        </section>
      </main>
    </div>
  )
}

function PostForm({ onCreated }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [tags, setTags] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setMessage('')
    try {
      const payload = {
        title,
        content,
        cover_image: coverImage || undefined,
        tags: tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
        author: 'Studio Potter',
      }
      const res = await fetch(`${API_BASE}/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to create post')
      setMessage('Post published!')
      setTitle('')
      setContent('')
      setCoverImage('')
      setTags('')
      onCreated?.()
    } catch (e) {
      setMessage(e.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 bg-white/70 p-5 rounded-xl border border-slate-200">
      <input
        className="px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 min-h-[120px]"
        placeholder="Write about the piece, process, or firing…"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        className="px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        placeholder="Cover image URL (optional)"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />
      <input
        className="px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        placeholder="Tags (comma separated, e.g. wheel, stoneware, glaze)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-slate-600">Your post will appear at the top of the list.</div>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 rounded bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-60"
        >
          {saving ? 'Publishing…' : 'Publish'}
        </button>
      </div>
      {message && <div className="text-sm text-slate-700">{message}</div>}
    </form>
  )
}
