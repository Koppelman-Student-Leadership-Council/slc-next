import Layout from "../components/Layout";
import PostTitle from "../components/post-long-title";
import PostSubTitle from "../components/post-sub-title";


function HomePage() {
  return <>
    <Layout>
      <PostTitle>Welcome <br/>
        To The <br/>
        Koppelman Student <span className="slc-color" >Leadership</span> Council</PostTitle>
        <PostSubTitle>
        "The Leaders of Tomorrow"
        </PostSubTitle>

      <p>The purpose of the Student Leadership Council is to enrich the campus experience of Koppelman School of Business students, promote student involvement in on-campus activities, and increase the visibility of the Koppelman School of Business. Members of the SLC are ambassadors of the KSB and serve as a liaison between the business students and the KSB Dean.</p>

      <p>SLC’s mission is to create a positive culture in the Koppelman School of Business and provide resources and motivation for business students to succeed upon graduation.</p>
      <p>Koppelman Student Leadership Council was founded in 2011, by Former Dean Willie Hopkins. The organization was formed to create a worthwhile experience for business students by providing them with the necessary skills and resources needed to succeed upon graduating from Brooklyn College. Hopkins believed that peer to peer mentoring was the best method to create a positive Koppelman experience for students. With over 9 years of establishment, SLC continues to create meaningful events, filled with lots of knowledge and fun. Additionally, the council has focused on forging relationships with students, faculty, business clubs, and alumni, in hopes of maintaining a strong Koppelman Community.</p>
      <p>Leadership
        The Student Leadership Council aims to cultivate the leadership potential of all our members. We offer a unique platform for idea-sharing and development, access to senior administrators in the KSB, and encourage peer-to-peer mentoring.We encourage our members to strive for more in their careers, academics, and in their communities.</p>

    </Layout>
  </>
}

export default HomePage