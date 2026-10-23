import { channelCtas } from '../lib/channels.js'

export default function ChannelActions({
  product,
  store,
  exclude = ['web'],
  label = 'Comprar por canal',
}) {
  const ctas = channelCtas({ product, store }).filter(
    (cta) => !exclude.includes(cta.channel)
  )

  if (ctas.length === 0) return null

  return (
    <nav className="channel-ctas" aria-label={label}>
      {ctas.map((cta) => (
        <a
          key={cta.channel}
          className="channel-cta"
          href={cta.href}
          {...(cta.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {cta.label}
        </a>
      ))}
    </nav>
  )
}
