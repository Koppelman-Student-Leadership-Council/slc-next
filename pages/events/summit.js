import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";

import CoverImage from '../../components/cover-image'
function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>KSB Summit</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0 d-flex justify-content-center">
                <CoverImage src="\assets\programs\ksb-summit.png" />
            </div>
            <div className="">
                The KSB Summit is intended to allow sophomore students that have demonstrated an interest in business to learn more about what it takes to succeed in the business world. The Summit aims to help students develop the knowledge and skills to compete in the increasingly competitive job market. At the summit, students connect with successful Brooklyn College alumni in fields such as accounting, finance, and human resources and have the opportunity to foster lasting relationships with fellow students. The Summit is designed to be interactive, informative, engaging, and inspiring by connecting students to BC Alumni and to fellow students through targeted activities. This is accomplished through inspiring keynote speakers, structured networking opportunities, and group activities to educate, engage, and empower students to consistently strive towards excellence.
            </div>
        </Layout>
    </>
}

export default HomePage