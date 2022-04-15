import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
  <Link as={`/community/${slug}`} href={`/community/${slug}`}>
    <div className="grid justify-items-center group p-3 shadow-md hover:shadow-lg transition-shadow duration-200 rounded-10 cursor-pointer 
    lg:shadow-none lg:hover:shadow-[0px_70px_30px_-65px] lg:hover:shadow-[#882345]
    ">
      <div className="mb-5 ">
        <div className="transition-shadow lg:group-hover:shadow-[0px_-50px_30px_-45px] lg:group-hover:shadow-[#ebba13]">
          <a>
          <CoverImage slug={slug} title={title} src={coverImage} postUrl={"programs"}  />
          </a>
        </div>
      </div>
      <div className="text-center ml:pl-4">
        <h3 className=" text-3xl mb-2 leading-snug">
          <a className="text-decoration-none text-secondary">{title}</a>
        </h3>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  </Link>
  )
}
