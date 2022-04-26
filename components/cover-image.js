import cn from 'classnames'

export default function CoverImage({ title, src, slug }) {
    const image = (
      <img
        src={src}
        alt={`Cover Image for ${title}`}
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