import { useEffect } from 'react'
import { stores } from '../data/stores.jsx'
import StoreCard from '../components/StoreCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { setSeo } from '../lib/seo.js'

export default function TiendasPage() {
  useEffect(() => {
    setSeo({
      title: 'Tiendas y nodos | Tujo Wholesales',
      description: 'Directorio de tiendas del ecosistema Tujo Wholesales y acceso a cada nodo comercial.',
      path: '/tiendas',
    })
  }, [])

  return (
    <div className="route">
      <div className="container">
        <SectionHeading
          eyebrow="Directorio"
          title="Las tiendas del ecosistema"
          description="22 nodos con identidad propia, conectados por un mismo sistema operativo."
        />
        <div className="stores-grid">
          {stores.map((store) => (
            <StoreCard key={store.slug} store={store} />
          ))}
        </div>
      </div>
    </div>
  )
}
