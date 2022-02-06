export default function sidedAbout({ content, image }) {
    return (<>   <div class="container">
        <div class="row">
            <div class="col-md-4" data-aos="fade-down-right" data-aos-duration="1500">
                <img class="slcLogo" src="logo.png" />
            </div>
            <div class="col-md-8" data-aos="fade-up-left" data-aos-duration="1500">
                <p style="padding-top:40px;">
                    The purpose of the Student Leadership Council is to enrich the campus experience of Koppelman School of Business students, promote student involvement in on-campus activities, and increase the visibility of the Koppelman School of Business. Members of the SLC are ambassadors of the KSB and serve as a liaison between the business students and the KSB Dean.

                </p>
            </div>
        </div>
    </div></>);
}