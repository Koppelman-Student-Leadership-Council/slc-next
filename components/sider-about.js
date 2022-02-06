export default function sidedAbout({ content, image }) {
    return (<>   <div class="container">
        <div class="row shadow-big hover:shadow-medium transition-shadow duration-200">
            <div class="col-md-4" data-aos="fade-down-right" data-aos-duration="1500">
                <img class="height-250 rounded-10" src={image} />
            </div>
            <div class="col-md-8 justify-content-center align-self-center">
                <div className="p-auto t" >{content}</div>
            </div>
        </div>
    </div></>);
}