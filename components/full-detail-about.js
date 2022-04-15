
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, title }) {
    return (<>
        {/* <div className="row shadow-big hover:shadow-medium transition-shadow duration-200"> */}
        <div className="row text-lg">
            <div className=" justify-content-center align-self-center">
                <h2 className="text-3xl lg:text-3xl pb-3">{title}</h2>
                {/* <br /> */}
                <p> {content}</p>
                {/* <div dangerouslySetInnerHTML={{__html:content}} ></div> */}
            </div>
        </div>
    </>);
}