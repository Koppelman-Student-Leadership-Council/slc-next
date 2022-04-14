import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
  link
}) {
  return (
    <Link as={link ? `${link}` : `/events/${slug}`} href={`/events/${slug}`}>
    <div className="
    group p-3 shadow-md transition-all duration-200 rounded-10 cursor-pointer 
    w-[90vw] ml:w-auto ml:m-0 lg:shadow-none lg:hover:shadow-xl text-center
    ">
    <div className="mb-5">
      <a>
        <CoverImage slug={slug} title={title} src={coverImage} postUrl={"programs"} />
      </a>
      </div>
      <h3 className="mb-2 leading-snug -mt-8 text-3xl md:text-2xl lg:text-3xl lg:pl-2 ml:text-left">
        <a className="text-decoration-none text-secondary">{title}</a>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
    </Link>
  )
}
