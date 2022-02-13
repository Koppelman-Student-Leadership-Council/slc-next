import Layout from "../../components/Layout";
import PostTitle from  "../../components/post-title";
import MemberCard from '../../components/MemberCard';

function HomePage() {
    return <>
       <Layout>
           <PostTitle breadcrumb>Our Team</PostTitle>
        <div className="">
       <MemberCard />
             </div>
       </Layout>
    </>
}

export default HomePage