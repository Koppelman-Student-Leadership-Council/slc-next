import cn from 'classnames'

export default function CoverImage({ title, src, slug }) {
    const image = (
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        // Max height as 640px
        style={{ maxHeight: '500px' }}
        className={cn(' rounded-10', {
          'duration-200 ': slug,
          
        })}
      />
    )
    return (
      <div className="card-zoom-image-h1">
        {image}
      </div>
    )
  }