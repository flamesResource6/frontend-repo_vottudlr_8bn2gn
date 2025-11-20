function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-medium mb-5">
              New collection just dropped
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Sculpted comfort, everyday confidence.
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Meet Lumina — a women’s shapewear bodysuit designed to smooth, sculpt, and move with you. Invisible under outfits, breathable all day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800">Shop the Fits</a>
              <a href="#features" className="inline-flex items-center rounded-full border border-gray-300 text-gray-700 px-6 py-3 font-medium hover:bg-gray-50">Learn More</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>Free shipping over $60</div>
              <div>30-day fit guarantee</div>
              <div>Easy returns</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center shadow-2xl ring-1 ring-black/5" />
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl p-4 ring-1 ring-black/5">
              <p className="text-sm font-medium text-gray-900">Ultra-soft fabric</p>
              <p className="text-xs text-gray-500">Breathable, seamless, second-skin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
