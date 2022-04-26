
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    return (<>
        <div className={"group grid grid-cols-1 transition-shadow duration-200 rounded-10 text-lg " + 
        "md:grid-cols-3 lg:hover:shadow-[-45px_55px_30px_-45px] " + 
        (title == "Leadership" || title == "Community" ? "lg:hover:shadow-[#AD4C66] " : title == "Build Skills" ? "lg:hover:shadow-[#ebba13] " : " ")
        }>
            <div className="col-span-2 align-self-center w-auto pl-7 pr-10 -mx-2 order-3 md:mx-0 text-right">
                <h2 className="text-3xl pt-3 pb-2 md:pt-0 md:pb-0">{title}</h2>
                <p>{content}</p>
            </div>
            {image && <div className={"align-self-center justify-self-center rounded-10 w-[90vw] transition-all duration-200 -order-1 md:w-auto md:order-3 lg:group-hover:scale-105 " +
            (title == "Leadership" || title == "Community" ? "lg:group-hover:shadow-[#ebba13] lg:group-hover:shadow-[20px_-20px_25px_-15px] " : title == "Build Skills" ? "lg:group-hover:shadow-[#AD4C66] lg:group-hover:shadow-[20px_-20px_25px_-15px] " : " ")
            }>
                <img src={image} className="h-[300] rounded-10" alt={title} />
            </div>}
            
        </div>
    </>);
}