import Head from 'next/head'
import Link from 'next/link'
import ApartmentCard from '../components/ApartmentCard'
import { APARTMENTS, NEIGHBOURHOODS } from '../lib/apartments'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Perth City Apartments — Find Your Perfect Apartment in Perth</title>
        <meta name="description" content="Find the best apartments in Perth, Western Australia. Browse CBD, Northbridge, Subiaco, Scarborough, Fremantle and South Perth apartments." />
      </Head>

      {/* Hero */}
      <section style={{background:'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #1e3a8a 100%)'}} className="text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div style={{color:'#fbbf24'}} className="text-sm font-semibold uppercase tracking-widest mb-4">Western Australia</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Find Your Perfect<br />
            <span style={{color:'#fbbf24'}}>Perth City Apartment</span>
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover the best apartments across Perth — from the vibrant CBD to beachside Scarborough and historic Fremantle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apartments" style={{backgroundColor:'#fbbf24',color:'#1e3a8a'}} className="px-8 py-4 rounded-lg font-extrabold text-lg hover:opacity-90 transition-opacity">
              Browse Apartments
            </Link>
            <Link href="/neighbourhoods" style={{backgroundColor:'transparent',color:'#ffffff',border:'2px solid #fbbf24'}} className="px-8 py-4 rounded-lg font-extrabold text-lg hover:bg-blue-800 transition-colors">
              Explore Neighbourhoods
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[{num:'6+', label:'Neighbourhoods'}, {num:'50+', label:'Apartments'}, {num:'4.8★', label:'Average Rating'}].map((s) => (
              <div key={s.label} className="text-center">
                <div style={{color:'#fbbf24'}} className="text-2xl font-extrabold">{s.num}</div>
                <div className="text-xs text-blue-200 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-heading">Featured Apartments</h2>
        <p className="section-subheading">Handpicked apartments across Perth's best locations</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APARTMENTS.slice(0, 3).map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/apartments" style={{backgroundColor:'#1e3a8a',color:'#ffffff',display:'inline-flex',padding:'14px 32px',borderRadius:'8px',fontWeight:'700',textDecoration:'none'}}>
            View All Apartments
          </Link>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section style={{backgroundColor:'#eff6ff'}} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Explore Neighbourhoods</h2>
          <p className="section-subheading">Find the perfect area to suit your lifestyle</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {NEIGHBOURHOODS.map((n) => (
              <Link key={n.slug} href={`/neighbourhoods/${n.slug}`} className="card p-5 text-center hover:-translate-y-1 transition-transform duration-200 group">
                <div className="text-4xl mb-3">{n.icon}</div>
                <h3 style={{color:'#1e3a8a'}} className="font-extrabold text-lg mb-1 group-hover:text-yellow-500 transition-colors">{n.name}</h3>
                <p className="text-xs text-gray-500 leading-snug">{n.description.split(' ').slice(0, 8).join(' ')}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Perth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-heading text-center">Why Choose Perth?</h2>
        <p className="section-subheading text-center">Australia's sunniest capital city</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {icon:'☀️', title:'300+ Sunny Days', body:'Perth enjoys more sunshine than any other Australian capital city.'},
            {icon:'🏖️', title:'Beautiful Beaches', body:'World-class beaches including Cottesloe, Scarborough and City Beach.'},
            {icon:'🍷', title:'World-Class Food', body:'Award-winning restaurants, cafes and the famous Swan Valley wine region.'},
            {icon:'🌿', title:'Kings Park', body:'One of the world\'s largest inner-city parks with stunning wildflowers.'},
          ].map((item) => (
            <div key={item.title} className="text-center p-6 card">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 style={{color:'#1e3a8a'}} className="font-extrabold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
