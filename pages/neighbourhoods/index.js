import Head from 'next/head'
import Link from 'next/link'
import { NEIGHBOURHOODS } from '../../lib/apartments'

export default function NeighbourhoodsPage() {
  return (
    <>
      <Head>
        <title>Perth Neighbourhoods — Find Your Perfect Area</title>
        <meta name="description" content="Explore Perth's best neighbourhoods for apartments." />
      </Head>
      <section style={{backgroundColor:'#1e3a8a'}} className="text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Perth Neighbourhoods</h1>
          <p style={{color:'#bfdbfe'}} className="text-lg">Explore Perth's best areas to live and stay</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEIGHBOURHOODS.map((n) => (
            <Link key={n.slug} href={`/neighbourhoods/${n.slug}`} className="card p-6 group hover:-translate-y-1 transition-transform duration-200">
              <div className="text-5xl mb-4">{n.icon}</div>
              <h2 style={{color:'#1e3a8a'}} className="font-extrabold text-xl mb-2 group-hover:text-yellow-500 transition-colors">{n.name}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{n.description}</p>
              <div className="flex flex-wrap gap-2">
                {n.highlights.map((h) => (
                  <span key={h} style={{backgroundColor:'#eff6ff',color:'#1e3a8a'}} className="text-xs font-semibold px-2 py-1 rounded-full">{h}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
