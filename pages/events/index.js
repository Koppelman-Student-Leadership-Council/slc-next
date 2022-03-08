import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import EventPreview from '../../components/event-preview'

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Events</PostTitle>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
                    <EventPreview title="Business Matters" slug="business-matters" excerpt="Learn more about slc Business matters."  coverImage="\assets\programs\business-matters.png"  />
                    <EventPreview title="KSB Summit" slug="summit" excerpt="Learn more about slc KSB Summit." coverImage="\assets\programs\ksb-summit.png"  />
                    <EventPreview title="Learn More" slug="learn-more" excerpt="Learn more about slc." coverImage="\assets\programs\learn-more.png"  />
                    <EventPreview title="Automation" slug="s&c-automation" excerpt="Snack and Chats, Learn how to automate your stocks for free." coverImage="\assets\programs\s&c-automation.png"  />
                </div>
            </section>
        </Layout>
    </>
}

export default HomePage