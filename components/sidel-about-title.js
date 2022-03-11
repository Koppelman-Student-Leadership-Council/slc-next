
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    if(2 == 1) {
        return (<>
            <div className="row shadow-big hover:shadow-medium transition-shadow duration-200 rounded-10">
                <div className="col-md-8 justify-content-center align-self-center">
                    <h2 className="text-2xl lg:text-3xl">{title}</h2>
                    <p>{content}</p>
                </div>
                {image && <div className="col-md-4 justify-between align-self-center ">
                    <img src={image} className="height-250 rounded-10" alt={title} />
                </div>}
                
            </div>
            </>);
    } else {
        return (<>
            <div className="grid grid-cols-3 shadow-big hover:shadow-medium transition-shadow duration-200 rounded-10">
                <div className="col-md-8 align-self-center justify-self-start w-auto col-span-2 pl-7">
                    <h2 className="text-2xl lg:text-3xl">{title}</h2>
                    <p>{content}</p>
                </div>
                {image && <div className="col-md-4 align-self-center w-auto justify-self-end">
                    <img src={image} className="h-[250px] rounded-10" alt={title} />
                </div>}
                
            </div>
        </>);
    }
}