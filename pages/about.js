import Layout from "../components/Layout";
import PostTitle from "../components/post-title";

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Who We Are</PostTitle>
            <div className="">
                <p>The purpose of the Student Leadership Council (SLC) is two-fold: (1) to enrich the campus experience of Koppelman School of Business students and promote their involvement in activities designed to enhance their professional and personal development and (2) to help raise the visibility of the Koppelman School of Business. Members of the SLC are ambassadors and serve as a liaison between business students and the KSB Dean.


                </p>


                <p>The growth of the Student Leadership Council is in part facilitated by the diverse blend of ideas and unique talents of all its members. Much of the SLC&apos;s success can be attributed to its executive board and members at large who continually strive to increase its visibility and influence.</p>
                <p> The Student Leadership Council offers a unique opportunity for Brooklyn College undergraduate and graduate business majors to build tangible leadership skills, connect with the student body, and cultivate long-lasting relationships with professionals.</p>
                <p>Throughout the academic year, we offer support and guidance to fellow business clubs and organizations. Our signature events are the Business Matters! Symposium and the KSB Summit.</p>

            </div>
        </Layout>
    </>
}

export default HomePage