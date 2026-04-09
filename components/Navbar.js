import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{backgroundColor:'#1e3a8a'}} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span style={{color:'#fbbf24'}} className="text-2xl font-extrabold">Perth</span>
            <span className="text-white text-2xl font-extrabold">City Apartments</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/apartments" className="text-white hover:text-yellow-400 font-medium transition-colors">Apartments</Link>
            <Link href="/neighbourhoods" className="text-white hover:text-yellow-400 font-medium transition-colors">Neighbourhoods</Link>
            <Link href="/guide" className="text-white hover:text-yellow-400 font-medium transition-colors">City Guide</Link>
            <Link href="/about" className="text-white hover:text-yellow-400 font-medium transition-colors">About</Link>
            <Link href="/contact" style={{backgroundColor:'#fbbf24',color:'#1e3a8a'}} className="px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
