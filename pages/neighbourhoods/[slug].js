import Head from 'next/head'
import ApartmentCard from '../../components/ApartmentCard'
import { APARTMENTS, NEIGHBOURHOODS } from '../../lib/apartments'

export default function NeighbourhoodPage({ neighbourhood, apartments }) {
  return (
    <>
      <Head>
        <title>{neighbourhood.name} Apartments Perth</title>
        <meta name="description" content={neighbourhood.description} />
      </Head>
      <section style={{backgroundColor:'#1e3a8a'}} className="text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">{neighbourhood.icon}</div>
          <h1 className="text-4xl font-extrabold mb-4">{neighbourhood.name}</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">{neighbourhood.description}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div style={{backgroundColor:'#eff6ff'}} className="rounded-xl p-6 mb-10">
          <h2 style={{color:'#1e3a8a'}} className="font-extrabold text-xl mb-4">Highlights</h2>
          <div className="flex flex-wrap gap-3">
            {neighbourhood.highlights.map((h) => (
              <span key={h} style={{backgroundColor:'#1e3a8a',color:'#fbbf24'}} className="px-4 py-2 rounded-full text-sm font-semibold">{h}</span>
            ))}
          </div>
        </div>
        <h2 className="section-heading">Apartments in {neighbourhood.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {apartments.length > 0 ? apartments.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          )) : (
            <p className="text-gray-500 col-span-3 py-12 text-center">More apartments coming soon!</p>
          )}
        </div>
      </section>
    </>
  )
}

export async function getStaticProps({ params }) {
  const neighbourhood = NEIGHBOURHOODS.find(n => n.slug === params.slug)
  const apartments = APARTMENTS.filter(a => a.neighbourhood === neighbourhood?.name)
  return { props: { neighbourhood, apartments } }
}

export async function getStaticPaths() {
  return {
    paths: NEIGHBOURHOODS.map(n => ({ params: { slug: n.slug } })),
    fallback: false
  }
}
