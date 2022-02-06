import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import CommunityPreview from '../../components/community-preview'

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Community</PostTitle>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
                    <CommunityPreview title="Our Team" slug="team" excerpt="Learn more about our team." />
                    <CommunityPreview title="KSB Clubs" slug="clubs" excerpt="Learn more about slc KSB Clubs." />
                    <CommunityPreview title="Contact Us" slug="contact" excerpt="Contact Us" />
                </div>
            </section>
        </Layout>
    </>
}

export default HomePage