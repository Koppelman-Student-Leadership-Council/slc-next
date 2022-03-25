
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    return (<>
        <div className="group grid grid-cols-1 sm:grid-cols-3 shadow-big hover:shadow-medium transition-shadow duration-200 rounded-10">
            <div className="col-span-2 align-self-center justify-self-start w-auto  pl-7 pr-10">
                <h2 className="text-2xl lg:text-3xl">{title}</h2>
                <p>{content}</p>
            </div>
            {image && <div className="align-self-center w-auto justify-self-end group-hover:scale-105 transition-transform duration-200">
                <img src={image} className="h-[300] rounded-10" alt={title} />
            </div>}
            
        </div>
    </>);
}