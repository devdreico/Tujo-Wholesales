export default function SectionHeading({ as: Tag = 'h2', eyebrow, title, description }) {
  return (
    <header className="section-head">
      {eyebrow ? <p className="section-head__eyebrow">{eyebrow}</p> : null}
      <Tag className="section-head__title">{title}</Tag>
      {description ? <p className="section-head__desc">{description}</p> : null}
    </header>
  )
}
