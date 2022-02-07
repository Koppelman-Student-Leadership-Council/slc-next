
import CoverImage from './cover-image-logo'
import Link from 'next/link'

export default function Partnership({
    title,
    link,
    imageLink
}) {
    return (
        <div className=" col-md-4 mb-2" >
            <div className="" ></div>
            <div className=" content  ">
                <a target="_blank" href={link}>
                    <a>
                        <div className="content-overlay "></div>

                        <CoverImage slug={title} title={title} src={imageLink} postUrl={"programs"} />
                        <a target="_blank" as={link} href={link} >
                            <div className="content-details fadeIn-top">
                                <p>{title}</p>
                            </div>
                        </a>

                    </a>

                </a>
            </div>


        </div>
    )
}
