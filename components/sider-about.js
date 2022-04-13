export default function sidedAbout({ content, image }) {
    return (<>   <div className="container">
        <div className="
        group row shadow-big transition-shadow duration-200 rounded-10 -mx-14 text-lg p-3 
        md:m-auto
        lg:text-center 
        2xl:hover:shadow-medium 
        ">
            <div className="col-md-4" data-aos="fade-down-right" data-aos-duration="1500">
                <img className="max-h-[250px] m-auto self-center rounded-10 lg:group-hover:scale-105 transition-transform duration-200" src={image} />
            </div>
            <div className="col-md-8 justify align-self-center">
                <div className="lg:p-auto" >{content}</div>
            </div>
        </div>
    </div></>);
}