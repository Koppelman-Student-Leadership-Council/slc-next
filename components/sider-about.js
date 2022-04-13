export default function sidedAbout({ content, image }) {
    return (<>   <div className="container">
        <div className="
        group row shadow-big transition-shadow duration-200 rounded-10 -mx-14 text-lg p-3 
        md:m-auto
        lg:text-center 
        2xl:hover:shadow-[70px_70px_30px_-65px]
        2xl:hover:shadow-[#882345]
        ">
            <div className="col-md-4" data-aos="fade-down-right" data-aos-duration="1500">
                <img className="max-h-[250px] m-auto self-center rounded-10 transition-all duration-200 2xl:group-hover:scale-105 2xl:group-hover:shadow-[-40px_-40px_30px_-45px] 2xl:group-hover:shadow-[#ebba13]" src={image} />
            </div>
            <div className="col-md-8 justify align-self-center">
                <div className="lg:p-auto" >{content}</div>
            </div>
        </div>
    </div></>);
}