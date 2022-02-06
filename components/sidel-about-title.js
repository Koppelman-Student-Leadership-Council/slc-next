export default function sidedAbout({ content, image, title }) {
    return (<>
        <div data-aos="zoom-in" data-aos-duration="1000" class="col-md-4 mission-cards">

            <div className="col-md-8 justify-content-center align-self-center">
                <h2 class="mission-cards">{title}</h2>
                <p>
                    {content}

                </p>
            </div>
            <div className="col-md-4">
                <img src={image} class="height-250" alt={title} align="left" />
            </div>
        </div>
    </>);
}