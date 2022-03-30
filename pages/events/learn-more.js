import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import FullDetailAbout from "../../components/full-detail-about"
import SideRightAboutTitle from "../../components/sider-about-title"


const departments=[
    "Operations","Alumni Relations", "Club & Faculty Relations", "Technology", "Marketing"
]

const departmentData = {
    "Operations": "The Operations Department is responsible for creating the highest level of efficiency possible within the SLC. As a Department, we directly assist the Executive Team with daily operations, including scheduling, close monitoring of deadlines, and task delegation. The Operations Department is responsible for recording impact-focused minutes and key accomplishments/decisions made during the meetings. We aim to ensure that all operations processes when organizing an event are carried out most appropriately. Some of those processes are: creating a day of task and event structures for signature events, reserving space and equipment for events and meetings, and managing zoom events.",
    "Alumni Relations": "The Alumni Relations Department is responsible for fostering relationships with SLC’s " +
        "alumni network and creating an engaged and supportive connection between former and current SLC members. " +
        "SLC’s alumni network consists of diverse members in terms of experience, industries and exposure. The department  " +
        "is responsible for keeping the alumni aware about the successes and current events hosted by SLC through newsletters.  " +
        "Buddy System is a mentorship program within SLC that pairs a current member with an alumni for the professional " +
        " development of the current members and for the alumni to stay better connected and engaged with the progress of SLC",
    "Club & Faculty Relations": "The Club Relations department aims to act as an intermediary between all of the active KSB  " +
        "clubs. This department takes great pride in developing intimate connections with clubs in order to establish a larger  " +
        "network where those clubs can then interact and collaborate with each other. Our chief purpose is to be the bridge that  " +
        "tethers to all KSB clubs and brings them closer together!",
    "Technology": "In the Tech department, students from technical backgrounds get to connect with the business students. " +
        " Over the past few years, CS and CIS students have been heavily envolved in the council.  " +
        "They have created the official website of the SLC and are currently maintaining it. Apart from these, the tech department  " +
        "plays a key role helping members of the council with tech support and helps to create a bridge between the tech and business students.",
    "Marketing": "The marketing department is intended to use creativity to enhance the efforts of our SLC peers by  " +
        "promoting and advertising events on our social media. Behind the scenes, the department is responsible for creating content,  " +
        "making flyers, interacting with KBS students online and being the brand ambassadors for SLC. There’s always something " +
        " new to do in marketing, with creativity and invitation the marketing team is always searching for new ways to improve and advance " +
        " the student outreach strategy.",
    "Executive Team": " Their responsibility is to work with the team to create a carefully selected plan for the upcoming semester to promote community involvement and professional development on campus! Here at the council, we work intrinsically to grow our team’s leadership skills and develop their soft skills to set them up for a successful career!"
}

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Learn More</PostTitle>
            <div className="">
                <p>
                    The Student Leadership Council aims to cultivate the leadership potential of all our members. We offer a unique platform for idea-sharing and development, access to senior administrators in the KSB, and encourage peer-to-peer mentoring.We encourage our members to strive for more in their careers, academics, and in their communities.</p>
            </div>


            <br /><FullDetailAbout title={departments[0]}  content={departmentData[departments[0]]} />
            <br /><FullDetailAbout title={departments[1]}  content={departmentData[departments[1]]} />
            <br /><FullDetailAbout title={departments[2]}  content={departmentData[departments[2]]} />
            <br /><FullDetailAbout title={departments[3]}  content={departmentData[departments[3]]} />
            <br /><FullDetailAbout title={departments[4]}  content={departmentData[departments[4]]} />
            <br /><FullDetailAbout title={departments[5]}  content={departmentData[departments[5]]} />
             
                

        </Layout>
    </>
}

export default HomePage