
import PostSubTitle from "./post-sub-title";
import Link from 'next/link'

export default function SideTitleLink({ content, image, title, href }) {
    return (<>
        <a target="_blank"  href={href} rel="noopener noreferrer" >
            <div className={"group grid grid-cols-1 transition-shadow duration-200 rounded-10 text-lg " +
                "md:grid-cols-3 lg:hover:shadow-[45px_55px_30px_-45px] " +
                (title == "Professional Developement" ? "lg:hover:shadow-[#ebba13] " : title == "Team Work" || title == "Events and Clubs" ? "lg:hover:shadow-[#AD4C66] " : " ")
            }>
                {image && <div className={"align-self-center justify-self-center rounded-10 w-[90vw] transition-all duration-200 md:w-auto lg:group-hover:scale-105 " +
                    (title == "Events and Clubs" || title == "Team Work" ? "lg:group-hover:shadow-[#ebba13] lg:group-hover:shadow-[-20px_-20px_25px_-15px] " : title == "Professional Developement" ? "lg:group-hover:shadow-[#AD4C66] lg:group-hover:shadow-[-20px_-20px_25px_-15px] " : " ")
                }>
                    <img src={image} className="h-[300] rounded-10" alt={title} />
                </div>}
                <div className="col-span-2 align-self-center w-auto pr-7 pl-10 -ml-2 md:ml-0">
                    <h2 className="text-3xl lg:text-3xl pt-3 pb-2">{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </a>
    </>);
}