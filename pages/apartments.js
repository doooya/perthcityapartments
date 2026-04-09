import Head from 'next/head'
import { useState } from 'react'
import ApartmentCard from '../components/ApartmentCard'
import { APARTMENTS, NEIGHBOURHOODS } from '../lib/apartments'

export default function ApartmentsPage() {
  const [neighbourhood, setNeighbourhood] = useState('All')
  const [listingType, setListingType] = useState('all')

  const filtered = APARTMENTS.filter(a => {
    const matchNeighbourhood = neighbourhood === 'All' || a.neighbourhood === neighbourhood
    const matchType = listingType === 'all' || a.listingType === listingType
    return matchNeighbourhood && matchType
  })

  return (
    <>
      <Head>
        <title>Perth Apartments — Rent or Buy</title>
        <meta name="description" content="Browse apartments to rent or buy in Perth, Western Australia." />
      </Head>
      <section style={{backgroundColor:'#1e3a8a'}} className="text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Perth Apartments</h1>
          <p style={{color:'#bfdbfe'}} className="text-lg">Browse apartments to rent or buy across Perth</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Rent/Buy Toggle */}
        <div className="flex gap-3 mb-6">
          {[{label:'All', value:'all'}, {label:'For Rent', value:'rent'}, {label:'For Sale', value:'buy'}].map((t) => (
            <button key={t.value} onClick={() => setListingType(t.value)} style={{backgroundColor: listingType === t.value ? '#fbbf24' : '#ffffff', color: listingType === t.value ? '#1e3a8a' : '#6b7280', border:'2px solid #fbbf24'}} className="px-6 py-2 rounded-full font-extrabold transition-colors">
              {t.label}
            </button>
          ))}
        </div>

        {/* Neighbourhood Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', ...NEIGHBOURHOODS.map(n => n.name)].map((n) => (
            <button key={n} onClick={() => setNeighbourhood(n)} style={{backgroundColor: neighbourhood === n ? '#1e3a8a' : '#ffffff', color: neighbourhood === n ? '#ffffff' : '#1e3a8a', border:'2px solid #1e3a8a'}} className="px-4 py-2 rounded-full text-sm font-semibold transition-colors">
              {n}
            </button>
          ))}
        </div>

        {/* Results */}
        <p className="text-gray-500 text-sm mb-4">{filtered.length} apartments found</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? filtered.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} listingType={listingType} />
          )) : (
            <p className="text-gray-500 col-span-3 text-center py-20">No apartments found.</p>
          )}
        </div>
      </section>
    </>
  )
}
