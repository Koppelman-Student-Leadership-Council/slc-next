
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    return (<>
        <div className={"group grid grid-cols-1 transition-shadow duration-200 rounded-10 text-lg " + 
        "md:grid-cols-3 2xl:hover:shadow-[-45px_55px_30px_-45px] " + 
        (title == "Leadership" || title == "Community" ? "2xl:hover:shadow-[#AD4C66] " : title == "Build Skills" ? "2xl:hover:shadow-[#ebba13] " : " ")
        }>
            <div className="col-span-2 align-self-center w-auto pl-7 pr-10 -mx-12 order-3 md:mx-0 text-right">
                <h2 className="text-3xl pt-3 pb-2 md:pt-0 md:pb-0">{title}</h2>
                <p>{content}</p>
            </div>
            {image && <div className={"align-self-center rounded-10 w-[90vw] -ml-8 transition-all duration-200 -order-1 md:ml-0 md:w-auto md:order-3 2xl:group-hover:scale-105 " +
            (title == "Leadership" || title == "Community" ? "2xl:group-hover:shadow-[#ebba13] 2xl:group-hover:shadow-[20px_-20px_30px_-15px] " : title == "Build Skills" ? "2xl:group-hover:shadow-[#AD4C66] 2xl:group-hover:shadow-[20px_-20px_30px_-15px] " : " ")
            }>
                <img src={image} className="h-[300] rounded-10" alt={title} />
            </div>}
            
        </div>
    </>);
}