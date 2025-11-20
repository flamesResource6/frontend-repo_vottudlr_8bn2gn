function Features(){
  const items = [
    {
      title: 'Seamless design',
      desc: 'Invisible under clothes with laser-cut edges for a smooth finish.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-rose-500"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    },
    {
      title: 'Targeted compression',
      desc: 'Support where you want it: tummy, waist, and back zones.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-rose-500"><path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    },
    {
      title: 'All-day comfort',
      desc: 'Moisture-wicking, breathable fabric that moves with you.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-rose-500"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Designed for your shape</h2>
          <p className="mt-3 text-gray-600">Engineered to sculpt and smooth without sacrificing comfort. Tested on real bodies, for real life.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-rose-50 text-rose-600 mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
