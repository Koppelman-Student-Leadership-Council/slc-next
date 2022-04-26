
import ZoomCard from './zoom-card'
import Link from 'next/link'

export default function Partnership({
    title,
    link,
    imageLink
}) {
    return (
        <div className="mb-2 rounded-10 text-2xl font-medium" >
            
            <div className="grid justify-items-center group-h2">
                <a target="_blank" href={link} rel="noopener noreferrer">
                    <a>
                        <ZoomCard slug={title} title={title} src={imageLink} postUrl={"programs"} />
                    </a>
                </a>
                <a target="_blank" href={link} rel="noopener noreferrer">
                <h1 className="text-center max-w-xs lg:hidden">
                    {title}
                </h1>
                </a>
            </div>

            {/* <div className=" content ">
                <a target="_blank" href={link} rel="noopener noreferrer">
                    <a>

                        <div className="content-overlay rounded-10"></div>

                        <CoverImage slug={title} title={title} src={imageLink} postUrl={"programs"} />

                        <a target="_blank" as={link} href={link} rel="noopener noreferrer" >
                            <div className="content-details fadeIn-top">
                                <p>{title}</p>
                            </div>
                        </a>

                    </a>

                </a>
            </div> */}
        </div>
    )
}
