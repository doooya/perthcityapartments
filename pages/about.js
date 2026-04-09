import Head from 'next/head'
export default function About() {
  return (
    <>
      <Head><title>About — Perth City Apartments</title></Head>
      <section style={{backgroundColor:'#1e3a8a'}} className="text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">Perth City Apartments is your trusted guide to finding the perfect apartment in Perth, Western Australia.</p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">We cover all of Perth's best neighbourhoods including the CBD, Northbridge, Subiaco, Scarborough, Fremantle and South Perth.</p>
        <p className="text-gray-600 text-lg leading-relaxed">For enquiries contact us at <a href="mailto:info@selectauthority.com" style={{color:'#1e3a8a'}} className="font-bold underline">info@selectauthority.com</a></p>
      </div>
    </>
  )
}
