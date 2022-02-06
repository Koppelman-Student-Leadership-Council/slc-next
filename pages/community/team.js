import Layout from "../../components/Layout";
import PostTitle from  "../../components/post-title";

function HomePage() {
    return <>
       <Layout>
           <PostTitle breadcrumb>Our Team</PostTitle>
        <div className="">
        Each Fall semester, the SLC hosts Business Matters, a two-day symposium designed to to help build strong ties between business students, business faculty, and the business community by providing a forum that facilitates an exchange of ideas leading to professional growth.
Business Matters is attended by approximately 800 students every Fall semester, and has hosted BC alumnus from premier firms such as Goldman Sachs, J.P. Morgan, Deloitte, Accenture, and the NYC Department of Finance.
Over 8 years, Business Matters has grown into one of the largest, student organized event on campus.
        </div>
       </Layout>
    </>
}

export default HomePage