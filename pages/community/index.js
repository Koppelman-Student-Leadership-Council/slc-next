import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import CommunityPreview from '../../components/community-preview'

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Community</PostTitle>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
                    <CommunityPreview title="Our Team" slug="team" excerpt="Learn more about our team." coverImage="\assets\programs\our-team.png" />
                    <CommunityPreview title="KSB Clubs" slug="clubs" excerpt="Learn more about slc KSB Clubs." coverImage="\assets\programs\ksb-clubs.png" />
                    <CommunityPreview title="Contact Us" slug="contact" excerpt="Contact Us" coverImage="\assets\programs\contact-us.png" />
                </div>
            </section>
        </Layout>
    </>
}

export default HomePage