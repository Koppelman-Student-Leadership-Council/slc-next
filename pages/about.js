import Layout from "../components/Layout";
import PostTitle from "../components/post-title";
import SideCenterAbout from "../components/sidec-about"
import SideLeftAboutTitle from "../components/sidel-about-title"
import SideRightAboutTitle from "../components/sider-about-title"



function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Who We Are</PostTitle>
            <div className="">
                <br />
                <div className=" row shadow-big hover:shadow-medium transition-shadow duration-200 height-is250 rounded-10">
                    <div className="justify-content-center align-self-center">
                        <p>The purpose of the Student Leadership Council (SLC) is two-fold: <b>(1)</b> To enrich the campus experience of Koppelman School of Business students and promote their involvement in activities designed to enhance their professional and personal development and <b>(2)</b> to help raise the visibility of the Koppelman School of Business. Members of the SLC are ambassadors and serve as a liaison between business students and the KSB Dean.</p>
                    </div>
                </div>
                <br /><SideRightAboutTitle title="Team Work" image="/assets/promotion/community.jpg" content="The growth of the Student Leadership Council is in part facilitated by the diverse blend of ideas and unique talents of all its members. Much of the SLC&apos;s success can be attributed to its executive board and members at large who continually strive to increase its visibility and influence." />
                <br /><SideLeftAboutTitle title="Build Skills" image="/assets/promotion/initiative.jpg" content="The Student Leadership Council offers a unique opportunity for Brooklyn College undergraduate and graduate business majors to build tangible leadership skills, connect with the student body, and cultivate long-lasting relationships with professionals." />
                <br /><SideRightAboutTitle title="Events and Clubs" image="/assets/promotion/business-matters.jpg" content="Throughout the academic year, we offer support and guidance to fellow business clubs and organizations. Our signature events are the Business Matters! Symposium and the KSB Summit." />


            </div>
        </Layout>
    </>
}

export default HomePage