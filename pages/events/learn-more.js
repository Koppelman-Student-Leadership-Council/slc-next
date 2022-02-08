import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Learn More</PostTitle>
            <div className="">
                <p>
                    The Student Leadership Council aims to cultivate the leadership potential of all our members. We offer a unique platform for idea-sharing and development, access to senior administrators in the KSB, and encourage peer-to-peer mentoring.We encourage our members to strive for more in their careers, academics, and in their communities.</p>
            </div>
        </Layout>
    </>
}

export default HomePage