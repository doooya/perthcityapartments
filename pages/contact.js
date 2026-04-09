import Head from 'next/head'
export default function Contact() {
  return (
    <>
      <Head><title>Contact — Perth City Apartments</title></Head>
      <section style={{backgroundColor:'#1e3a8a'}} className="text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div style={{backgroundColor:'#fefce8',border:'2px solid #fbbf24'}} className="rounded-xl p-6 mb-6">
          <h2 className="font-extrabold text-gray-900 text-xl mb-2">🏷️ Domain Acquisition</h2>
          <p className="text-gray-600 mb-3">Interested in purchasing PerthCityApartments.com?</p>
          <a href="mailto:info@selectauthority.com" style={{color:'#1e3a8a'}} className="font-extrabold text-lg underline">info@selectauthority.com</a>
        </div>
        <div style={{backgroundColor:'#eff6ff'}} className="rounded-xl p-6">
          <h2 className="font-extrabold text-gray-900 text-xl mb-2">📬 General Enquiries</h2>
          <a href="mailto:info@selectauthority.com" style={{color:'#1e3a8a'}} className="font-extrabold text-lg underline">info@selectauthority.com</a>
        </div>
      </div>
    </>
  )
}
