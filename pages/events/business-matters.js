import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import CoverImage from '../../components/cover-image';

function HomePage() {
    return <>
    <div className="group-h1">
        <Layout>
            <PostTitle breadcrumb>Business Matters</PostTitle>
            <div className="pt-10 grid justify-items-center">
                <div className="card-zoom-h1 justify-self-center">
                    <CoverImage src="/assets/programs/business-matters.png"/>
                </div>
                <div className="text-lg ml:text-center px-10">
                    <p>Each Fall semester, the SLC hosts Business Matters, a multi-day symposium designed to help build strong ties between business students, business faculty, and the business community by providing a forum that facilitates an exchange of ideas leading to professional growth.
                    Business Matters is attended by approximately 800 students every Fall semester, and has hosted BC alumni from premier firms such as Goldman Sachs, J.P. Morgan, Deloitte, Accenture, and the NYC Department of Finance.
                    Over eight years, Business Matters has grown into one of the most significant student organized event on campus.</p>
                </div>
            </div>
        </Layout>
    </div>
    </>
}

export default HomePage