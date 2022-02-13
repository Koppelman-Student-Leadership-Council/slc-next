import Layout from "../components/Layout";
import PostTitle from "../components/PostLongTitle";
import PostSubTitle from "../components/PostSubTitle";

import SideLeftAboutTitle from "../components/SideLeftAboutTitle"
import SideRightAboutTitle from "../components/SideRightAboutTitle"
import SideRightAbout from "../components/SideRightAbout"
import SideCenterAbout from "../components/SideCenterAbout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JoinButton from '../components/BtnJoinSLC'


function HomePage() {
  return <>
    <Layout>
      <PostTitle>Welcome <br />
        To The <br />
        Koppelman Student <span className="slc-color" >Leadership</span> Council</PostTitle>
      <PostSubTitle>
        &quot;The Leaders of Tomorrow&quot;
      </PostSubTitle>

      <SideRightAbout content="
The purpose of the Student Leadership Council is to enrich the campus experience of Koppelman School of Business students, promote student involvement in on-campus activities, and increase the visibility of the Koppelman School of Business. Members of the SLC are ambassadors of the KSB and serve as a liaison between the business students and the KSB Dean." image="assets/promotion/logo.png" />

      <br /><SideCenterAbout isQuote content="SLC’s mission is to create a positive culture in the Koppelman School of Business and provide resources and motivation for business students to succeed upon graduation." />

      <br /><SideCenterAbout content="Koppelman Student Leadership Council was founded in 2011, by Former Dean Willie Hopkins. The organization was formed to create a worthwhile experience for business students by providing them with the necessary skills and resources needed to succeed upon graduating from Brooklyn College. Hopkins believed that peer to peer mentoring was the best method to create a positive Koppelman experience for students. With over 9 years of establishment, SLC continues to create meaningful events, filled with lots of knowledge and fun. Additionally, the council has focused on forging relationships with students, faculty, business clubs, and alumni, in hopes of maintaining a strong Koppelman Community." />
      <br /><SideLeftAboutTitle title="Leadership" content="The Student Leadership Council aims to cultivate the leadership potential of all our members. We offer a unique platform for idea-sharing and development, access to senior administrators in the KSB, and encourage peer-to-peer mentoring.We encourage our members to strive for more in their careers, academics, and in their communities." image="assets/promotion/our-team.png" />
      <br /><SideRightAboutTitle image="/assets/promotion/business-matters.jpg" title="Professional Developement" content="The SLC aims to inspire and encourage students to take the lead in their personal and professional lives. We aim to ensure students are equipped with the resources and knowledge they need to dive into their professional careers." />
      <br /><SideLeftAboutTitle image="/assets/promotion/community.jpg" title="Community" content="The SLC aims to increase the visibility of the Koppelman School of Business and facilitate lasting professional (and personal) relationships between all members of the KSB. We accomplish this mission by drawing together Koppelman clubs, encouraging their continuation on campus, and ensuring students are familiar with the resources available to them." />
      <br />
      <div className="content-center text-center">
        < JoinButton />    </div>


    </Layout>
  </>
}

export default HomePage