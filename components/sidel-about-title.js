
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    return (<>
        <div className="
        group grid grid-cols-1 transition-shadow duration-200 rounded-10 text-lg
        md:grid-cols-3 
        2xl:hover:shadow-medium 
        ">
            <div className="col-span-2 align-self-center w-auto pl-7 pr-10 -mx-12 order-3 md:mx-0 text-right">
                <h2 className="text-3xl pt-3 pb-2 md:pt-0 md:pb-0">{title}</h2>
                <p>{content}</p>
            </div>
            {image && <div className="align-self-center w-[90vw] -ml-8 transition-transform duration-200 -order-1 md:ml-0 md:w-auto md:order-3 lg:group-hover:scale-105">
                <img src={image} className="h-[300] rounded-10" alt={title} />
            </div>}
            
        </div>
    </>);
}