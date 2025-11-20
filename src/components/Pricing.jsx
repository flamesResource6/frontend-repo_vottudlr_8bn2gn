import { useEffect, useState } from 'react'

function Pricing(){
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/pricing`)
        if(!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data)
      } catch (e){
        setPlans([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="pricing" className="py-20 bg-rose-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Find your perfect fit. Free shipping over $60 and 30-day returns on every plan.</p>
        </div>

        {loading ? (
          <p className="text-center mt-10 text-gray-600">Loading plans...</p>
        ) : (
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {(plans.length ? plans : [
              {name:'Essential', price:39, description:'Everyday shaping', features:['Breathable','Light compression','Seamless']},
              {name:'Sculpt', price:69, description:'Confident curves', features:['Waist shaping','Butt-lift','Anti-slip straps'], best_value:true},
              {name:'Ultra', price:99, description:'Maximum control', features:['Firm compression','Support zones','Invisible edges']},
            ]).map((p, i) => (
              <div key={i} className={`relative rounded-2xl bg-white border ${p.best_value ? 'border-rose-400 ring-2 ring-rose-200' : 'border-gray-200'} p-6 flex flex-col` }>
                {p.best_value && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-rose-600 text-white px-3 py-1 text-xs font-medium shadow-xs">Best value</span>
                )}
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-gray-600">{p.description}</p>
                <div className="mt-6 text-gray-900">
                  <span className="text-4xl font-bold">${p.price}</span>
                  <span className="text-gray-500"> / piece</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  {p.features?.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-rose-500 mt-0.5"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 font-medium hover:bg-gray-800">Add to bag</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Pricing
