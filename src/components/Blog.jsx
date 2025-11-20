import { useEffect, useState } from 'react'

function Blog(){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try{
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/blogs`)
        const data = await res.json()
        setPosts(data)
      } catch(e){
        setPosts([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">From the Journal</h2>
          <p className="mt-3 text-gray-600">Tips, stories, and fit guides from the Lumina team.</p>
        </div>

        {loading ? (
          <p className="text-center mt-10 text-gray-600">Loading posts...</p>
        ) : (
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {(posts.length ? posts : [
              {title:'How to choose the right shapewear bodysuit', excerpt:'A quick guide to fit, compression, and comfort.', author:'Team Lumina'},
              {title:'Confidence starts underneath', excerpt:'Why great foundations change everything.', author:'Editor'},
              {title:'Care tips: make it last', excerpt:'Wash, dry, and store to keep your Lumina like new.', author:'Care Team'},
            ]).map((p, i) => (
              <article key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] rounded-xl bg-rose-100/60 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-gray-600 text-sm">{p.excerpt}</p>
                <div className="mt-4 text-xs text-gray-500">By {p.author}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
