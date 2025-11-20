import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white font-bold">L</span>
            <span className="text-gray-900 font-semibold tracking-tight">Lumina Shapewear</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#blog" className="hover:text-gray-900">Blog</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="#pricing" className="ml-2 inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 font-medium hover:bg-gray-800">Shop Now</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-3 text-gray-700">
            <a href="#features" className="hover:text-gray-900" onClick={() => setOpen(false)}>Features</a>
            <a href="#pricing" className="hover:text-gray-900" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#blog" className="hover:text-gray-900" onClick={() => setOpen(false)}>Blog</a>
            <a href="#contact" className="hover:text-gray-900" onClick={() => setOpen(false)}>Contact</a>
            <a href="#pricing" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 font-medium w-max" onClick={() => setOpen(false)}>Shop Now</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
