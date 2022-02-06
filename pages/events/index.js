import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import ProgramsPreview from '../../components/program-preview'

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Events</PostTitle>
            <div className="">
                <ProgramsPreview title="Learn More" slug="learn-more" excerpt="Learn more about slc." />
            </div>
        </Layout>
    </>
}

export default HomePage