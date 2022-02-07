import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import Partnership from "../../components/partnership";

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Our Clubs</PostTitle>
            <div className="row">
                <Partnership />
            </div>
        </Layout>
    </>
}

export default HomePage