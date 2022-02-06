import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import EventPreview from '../../components/event-preview'

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Events</PostTitle>
            <div className="">
                <EventPreview title="Learn More" slug="learn-more" excerpt="Learn more about slc." />
            </div>
        </Layout>
    </>
}

export default HomePage