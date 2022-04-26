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
    w-[90vw] ml:w-auto ml:m-0 lg:shadow-none text-center 
    lg:hover:shadow-[0px_70px_30px_-65px] lg:hover:shadow-[#882345]
    ">
    <div className="mb-5 transition-all lg:group-hover:scale-105 lg:group-hover:shadow-[0px_-50px_30px_-45px] lg:group-hover:shadow-[#ebba13]">
      <a>
        <CoverImage slug={slug} title={title} src={coverImage} postUrl={"programs"} />
      </a>
    </div>
    <div className="ml:text-left ml:pl-2">
      <h3 className="mb-2 leading-snug -mt-8 text-3xl ml:text-4xl md:text-2xl lg:text-3xl">
        <a className="text-decoration-none text-secondary">{title}</a>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
    </Link>
  )
}
