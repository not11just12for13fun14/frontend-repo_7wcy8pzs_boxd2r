export default function Gallery() {
  const items = [
    {
      src: "https://images.unsplash.com/photo-1621453571889-0b228e998080?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcGVja2xlZCUyMHN0b25ld2FyZSUyMGJvd2x8ZW58MHwwfHx8MTc2MzUxOTY4OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      title: "Speckled stoneware bowl",
    },
    {
      src: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1470&auto=format&fit=crop",
      title: "Wheel-thrown vase",
    },
    {
      src: "https://images.unsplash.com/photo-1753164726518-8103a0d4c7f5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaGVlbC10aHJvd24lMjB2YXNlfGVufDB8MHx8fDE3NjM1MTk2ODl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      title: "Carved mug",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-amber-50/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Gallery</h2>
        <p className="text-slate-600 mt-2">A rotating selection of pieces.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <figure key={i} className="rounded-xl overflow-hidden border border-amber-200 bg-white shadow-sm">
              <img src={it.src} alt={it.title} className="w-full aspect-[4/3] object-cover" />
              <figcaption className="p-3 text-slate-700">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
