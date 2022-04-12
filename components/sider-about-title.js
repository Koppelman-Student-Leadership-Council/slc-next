
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    return (<>
        <div className="
        group grid grid-cols-1 transition-shadow duration-200 rounded-10 text-lg
        sm:grid-cols-3 
        md:hover:shadow-medium 
        ">
            {image && <div className="align-self-center w-[24rem] -mr-8 justify-self-end transition-transform duration-200 md:group-hover:scale-105 md:ml-0 md:w-auto">
                <img src={image} className="h-[300] rounded-10" alt={title} />
            </div>}
            <div className="col-span-2 align-self-center w-auto justify-self-end pr-7 pl-10 -mx-16">
                <h2 className="text-3xl lg:text-3xl pt-3 pb-2">{title}</h2>
                <p>{content}</p>
            </div></div>
    </>);
}