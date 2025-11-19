export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 to-white" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              A calm corner for clay stories
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Share your pottery journey—behind-the-wheel moments, glaze tests, kiln surprises, and finished pieces. This space is your personal blog and gallery.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#blog" className="px-5 py-3 rounded-lg bg-amber-600 text-white font-medium shadow hover:bg-amber-700 transition">Read the blog</a>
              <a href="#gallery" className="px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-medium hover:bg-slate-50 transition">View gallery</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1607556671927-78a6605e290b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb3R0ZXJ5JTIwd2hlZWx8ZW58MHwwfHx8MTc2MzUxOTY4OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Pottery wheel" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4 ring-1 ring-slate-200">
              <p className="text-sm text-slate-700"><span className="font-semibold">Latest:</span> Carved stoneware mug, iron speckle with satin white glaze.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
