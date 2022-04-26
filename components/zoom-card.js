import cn from 'classnames'

export default function ZoomCard({ title, src, slug, postUrl }) {
  const image = (
    // <img src={src} alt={`Cover Image for ${title}`} className={cn('shadow-big rounded-10', {'hover:shadow-medium transition-shadow duration-200': slug,})}/>
    <img src={src} alt={`Cover Image for ${title}`} className={cn('rounded-10')}/>
  )
  return (
    <div className="card-zoom-h2 sm:mx-0">
      <div className="card-zoom-image-h2">
          {image}
      </div>
      <h1 className="card-zoom-text-h2">
        {title}
      </h1>
    </div>
  )
}
