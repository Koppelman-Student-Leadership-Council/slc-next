import Layout from "../components/Layout";
import PostTitle from  "../components/post-title";

function HomePage() {
    return <>
       <Layout>
           <PostTitle breadcrumb>Calendar</PostTitle>
        <div className="">
           <h1>Events</h1>
           <h1>Featured Events</h1>
        </div>
       </Layout>
    </>
}

export default HomePage