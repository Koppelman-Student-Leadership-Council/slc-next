import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import SideLeftAboutTitle from "../../components/sidel-about-title"
import SideRightAboutTitle from "../../components/sider-about-title"


const departments=[
    "Alumni Relations", "Club & Faculty Relations", "Technology", "Marketing"
]

const departmentData = {
    "Alumni Relations": "The Alumni Relations Department is responsible for fostering relationships with SLC’s <br />" +
        "alumni network and creating an engaged and supportive connection between former and current SLC members. <br />" +
        "SLC’s alumni network consists of diverse members in terms of experience, industries and exposure. The department  <br />" +
        "is responsible for keeping the alumni aware about the successes and current events hosted by SLC through newsletters.  <br />" +
        "Buddy System is a mentorship program within SLC that pairs a current member with an alumni for the professional <br />" +
        " development of the current members and for the alumni to stay better connected and engaged with the progress of SLC",
    "Club & Faculty Relations": "The Club Relations department aims to act as an intermediary between all of the active KSB  <br />" +
        "clubs. This department takes great pride in developing intimate connections with clubs in order to establish a larger  <br />" +
        "network where those clubs can then interact and collaborate with each other. Our chief purpose is to be the bridge that  <br />" +
        "tethers to all KSB clubs and brings them closer together!",
    "Technology": "In the Tech department, students from technical backgrounds get to connect with the business students. <br />" +
        " Over the past few years, CS and CIS students have been heavily envolved in the council.  <br />" +
        "They have created the official website of the SLC and are currently maintaining it. Apart from these, the tech department  <br />" +
        "plays a key role helping members of the council with tech support and helps to create a bridge between the tech and business students.",
    "Marketing": "The marketing department is intended to use creativity to enhance the efforts of our SLC peers by  <br />" +
        "promoting and advertising events on our social media. Behind the scenes, the department is responsible for creating content,  <br />" +
        "making flyers, interacting with KBS students online and being the brand ambassadors for SLC. There’s always something <br />" +
        " new to do in marketing, with creativity and invitation the marketing team is always searching for new ways to improve and advance <br />" +
        " the student outreach strategy.",
    "Executive Team": ""
}

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Learn More</PostTitle>
            <div className="">
                <p>
                    The Student Leadership Council aims to cultivate the leadership potential of all our members. We offer a unique platform for idea-sharing and development, access to senior administrators in the KSB, and encourage peer-to-peer mentoring.We encourage our members to strive for more in their careers, academics, and in their communities.</p>
            </div>

            <br /><SideRightAboutTitle title={departments[0]}  content={de} />
                <br /><SideLeftAboutTitle title={departments[1]} content="The Student Leadership Council offers a unique opportunity for Brooklyn College undergraduate and graduate business majors to build tangible leadership skills, connect with the student body, and cultivate long-lasting relationships with professionals." />
                <br /><SideRightAboutTitle title={departments[2]}  content="Throughout the academic year, we offer support and guidance to fellow business clubs and organizations. Our signature events are the Business Matters! Symposium and the KSB Summit." />
                

        </Layout>
    </>
}

export default HomePage