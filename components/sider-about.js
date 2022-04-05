export default function sidedAbout({ content, image }) {
    return (<>   <div className="container">
        <div className="group row shadow-big hover:shadow-medium transition-shadow duration-200 rounded-10 p-3">
            <div className="col-md-4" data-aos="fade-down-right" data-aos-duration="1500">
                <img className="max-h-[250px]  m-auto self-center rounded-10 group-hover:scale-105 transition-transform duration-200" src={image} />
            </div>
            <div className="col-md-8 justify-content-center align-self-center">
                <div className="p-auto t" >{content}</div>
            </div>
        </div>
    </div></>);
}