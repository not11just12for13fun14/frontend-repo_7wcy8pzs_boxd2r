export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-slate-800 font-semibold">Pottery Journal</p>
          <p className="text-slate-600 mt-1">Handmade ceramics and studio notes.</p>
        </div>
        <div className="flex sm:justify-end gap-3 text-sm text-slate-700">
          <a className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50" href="mailto:hello@example.com">Email</a>
          <a className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
