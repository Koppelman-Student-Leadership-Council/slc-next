
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    return (<>
        <div className={"group grid grid-cols-1 transition-shadow duration-200 rounded-10 text-lg " +
        "md:grid-cols-3 2xl:hover:shadow-[45px_55px_30px_-45px] " + 
        (title == "Professional Developement" ? "2xl:hover:shadow-[#ebba13] " : title == "Team Work" || title == "Events and Clubs" ? "2xl:hover:shadow-[#AD4C66] " : " ")
        }>
            {image && <div className={"align-self-center rounded-10 w-[90vw] -ml-8 transition-all duration-200 md:ml-0 md:w-auto 2xl:group-hover:scale-105 " +
            (title == "Events and Clubs" || title == "Team Work" ? "2xl:group-hover:shadow-[#ebba13] 2xl:group-hover:shadow-[-20px_-20px_30px_-20px] " : title == "Professional Developement" ? "2xl:group-hover:shadow-[#AD4C66] 2xl:group-hover:shadow-[-20px_-20px_30px_-20px] " : " ")
        }>
                <img src={image} className="h-[300] rounded-10" alt={title} />
        </div>}
            <div className="col-span-2 align-self-center w-auto pr-7 pl-10 -ml-16 md:ml-0">
                <h2 className="text-3xl lg:text-3xl pt-3 pb-2">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    </>);
}