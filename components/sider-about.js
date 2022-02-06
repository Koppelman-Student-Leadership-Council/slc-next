export default function sidedAbout({ content, image }) {
    return (<>   <div class="container">
        <div class="row">
            <div class="col-md-4" data-aos="fade-down-right" data-aos-duration="1500">
                <img class="height-250" src={image} align="right"/>
            </div>
            <div class="col-md-8 justify-content-center align-self-center" data-aos="fade-up-left" data-aos-duration="1500">
                <div className="p-auto t" >{content}</div>
            </div>
        </div>
    </div></>);
}