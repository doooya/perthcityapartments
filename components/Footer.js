import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{backgroundColor:'#1e3a8a'}} className="text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span style={{color:'#fbbf24'}} className="text-xl font-extrabold">Perth City Apartments</span>
            <p className="text-blue-200 text-sm mt-2 leading-relaxed">Your complete guide to finding the perfect apartment in Perth, Western Australia.</p>
          </div>
          <div>
            <h3 style={{color:'#fbbf24'}} className="font-bold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-blue-200">
              <Link href="/apartments" className="hover:text-white transition-colors">Apartments</Link>
              <Link href="/neighbourhoods" className="hover:text-white transition-colors">Neighbourhoods</Link>
              <Link href="/guide" className="hover:text-white transition-colors">City Guide</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
            </div>
          </div>
          <div>
            <h3 style={{color:'#fbbf24'}} className="font-bold mb-3">Contact</h3>
            <p className="text-sm text-blue-200">Domain for sale:</p>
            <a href="mailto:info@selectauthority.com" style={{color:'#fbbf24'}} className="font-bold underline hover:opacity-80">info@selectauthority.com</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-blue-700 text-center text-xs text-blue-300">
          <p>© 2026 PerthCityApartments.com. All rights reserved.</p>
          <p className="mt-1">🏷️ This domain is for sale — <a href="mailto:info@selectauthority.com" style={{color:'#fbbf24'}} className="underline">info@selectauthority.com</a></p>
        </div>
      </div>
    </footer>
  )
}
