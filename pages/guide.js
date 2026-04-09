import Head from 'next/head'

const GUIDE_SECTIONS = [
  {
    icon: '✈️',
    title: 'Getting to Perth',
    content: 'Perth Airport is located 12km from the CBD. The Airport Connect train runs directly to the city centre in 19 minutes. Taxis and rideshares are also readily available. Perth is Australias most isolated capital city but is well connected by international flights from Asia, the Middle East and other Australian cities.'
  },
  {
    icon: '🚆',
    title: 'Getting Around',
    content: 'Perth has an excellent public transport network including trains, buses and ferries. The CAT bus service runs free routes through the CBD, Northbridge, East Perth and West Perth. The Transperth SmartRider card gives discounted fares across all services. Cycling is popular with an extensive network of bike paths along the Swan River.'
  },
  {
    icon: '☀️',
    title: 'Best Time to Visit',
    content: 'Perth enjoys a Mediterranean climate with hot dry summers and mild wet winters. The best time to visit is spring (September to November) when wildflowers bloom across the state and temperatures are perfect. Summer (December to February) is hot with temperatures regularly exceeding 35 degrees. Winter (June to August) is mild at around 18 degrees with some rainfall.'
  },
  {
    icon: '🍽️',
    title: 'Food and Dining',
    content: 'Perth has a world-class food scene driven by its multicultural population and access to incredible fresh produce and seafood. Must-visit areas include Northbridge for Asian cuisine, Subiaco and Mount Lawley for cafes, and Fremantle Fishing Boat Harbour for fresh fish and chips. The Swan Valley wine region is just 30 minutes from the city.'
  },
  {
    icon: '🏖️',
    title: 'Beaches',
    content: 'Perth is blessed with stunning Indian Ocean beaches stretching along its coastline. Cottesloe is the most iconic, known for its Mediterranean feel and Sculpture by the Sea festival. Scarborough has been recently redeveloped with a vibrant esplanade. City Beach, Trigg and Floreat are popular with families. The water is crystal clear and patrolled by lifeguards.'
  },
  {
    icon: '🌿',
    title: 'Parks and Nature',
    content: 'Kings Park and Botanic Garden is one of the worlds largest inner-city parks, offering stunning views of the city skyline and Swan River. The park covers 400 hectares and features native bushland, formal gardens and the Western Australian Botanic Garden. Rottnest Island is a 30-minute ferry ride from Fremantle and is home to the famous quokka.'
  },
]

export default function GuidePage() {
  return (
    <>
      <Head>
        <title>Perth City Guide — Everything You Need to Know</title>
        <meta name="description" content="Your complete guide to Perth, Western Australia. Transport, beaches, food, neighbourhoods and more." />
      </Head>
      <section style={{backgroundColor:'#1e3a8a'}} className="text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Perth City Guide</h1>
          <p style={{color:'#bfdbfe'}} className="text-lg">Everything you need to know about living and visiting in Perth, Western Australia</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8">
          {GUIDE_SECTIONS.map((section) => (
            <div key={section.title} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{section.icon}</span>
                <h2 style={{color:'#1e3a8a'}} className="text-2xl font-extrabold">{section.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
