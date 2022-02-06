
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    return (<>
        <div class="row">
            <div className="col-md-4 justify-content-center align-self-center ">
                <img src={image} class="height-250" alt={title} />
            </div>
            <div className="col-md-8 justify-content-center align-self-center">
                <h2 class="text-1xl md:text-2xl lg:text-3xl">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    </>);
}