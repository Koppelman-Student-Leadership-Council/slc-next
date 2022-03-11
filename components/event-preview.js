import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <div className="group p-3 shadow-big hover:shadow-medium transition-shadow duration-200 rounded-10">
      <div className="mb-5">
        <Link as={`/events/${slug}`} href={`/events/${slug}`}>
          <a>
            <CoverImage slug={slug} title={title} src={coverImage} postUrl={"programs"} />
          </a>
        </Link>
      </div>
      <h3 className="text-3xl mb-2 leading-snug pl-4">
        <Link as={`/events/${slug}`} href={`/events/${slug}`}>
          <a className="text-decoration-none text-secondary">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4 pl-4">{excerpt}</p>
    </div>
  )
}
