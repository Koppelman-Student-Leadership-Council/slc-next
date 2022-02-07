
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    return (<>
        <div class="row shadow-big hover:shadow-medium transition-shadow duration-200">
            <div className="col-md-8 justify-content-center align-self-center">
                <h2 class="text-2xl lg:text-3xl">{title}</h2>
                <p>{content}</p>
            </div>
            <div className="col-md-4 justify-content-center align-self-center ">
                <img src={image} class="height-250 rounded-10" alt={title} />
            </div>
        </div>
    </>);
}