import cn from 'classnames'

export default function CoverImage({ title, src, slug, postUrl }) {
  const image = (
    // <img src={src} alt={`Cover Image for ${title}`} className={cn('shadow-big rounded-10', {'hover:shadow-medium transition-shadow duration-200': slug,})}/>
    <img src={src} alt={`Cover Image for ${title}`} className={cn('rounded-10')}/>
  )
  return (
    <div className="sm:mx-0">
      
          {image}
      
    </div>
  )
}
