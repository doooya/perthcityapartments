export default function ApartmentCard({ apartment, listingType }) {
  const { name, neighbourhood, type, rentPrice, buyPrice, rating, image, features, description, bookingLink, listingType: aptType } = apartment
  const showPrice = listingType === 'buy' ? buyPrice : rentPrice

  return (
    <div className="card flex flex-col group">
      <div className="relative overflow-hidden h-48">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span style={{backgroundColor: aptType === 'buy' ? '#fbbf24' : '#1e3a8a', color: aptType === 'buy' ? '#1e3a8a' : '#ffffff'}} className="absolute top-3 left-3 text-xs font-extrabold px-3 py-1 rounded-full">
          {aptType === 'buy' ? 'For Sale' : 'For Rent'}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span style={{backgroundColor:'#dbeafe',color:'#1e3a8a'}} className="text-xs font-semibold px-2 py-1 rounded-full">{neighbourhood}</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-sm font-bold text-gray-900">{rating}</span>
          </div>
        </div>
        <h3 className="font-extrabold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">{name}</h3>
        <p className="text-sm text-gray-500 mb-1">{type}</p>
        <p style={{color:'#1e3a8a'}} className="font-extrabold text-lg mb-3">{showPrice}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {features.map((f) => (
            <span key={f} style={{backgroundColor:'#f3f4f6'}} className="text-xs text-gray-600 px-2 py-1 rounded-full">{f}</span>
          ))}
        </div>
        <a href={bookingLink} target="_blank" rel="noopener noreferrer" style={{backgroundColor:'#1e3a8a',color:'#ffffff',display:'flex',alignItems:'center',justifyContent:'center',padding:'12px',borderRadius:'8px',fontWeight:'700',textDecoration:'none'}}>
          {aptType === 'buy' ? 'View Properties for Sale on reiwa.com.au' : 'View Rentals on reiwa.com.au'}
        </a>
      </div>
    </div>
  )
}
