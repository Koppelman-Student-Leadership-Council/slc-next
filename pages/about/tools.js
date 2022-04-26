import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import FullDetailAbout from "../../components/full-detail-about"
import SideRightAboutTitle from "../../components/sider-about-title"
import sideLAboutTitle from "../../components/sidel-about-linktitle"



const toolsData = [{ title: "titleX", description: "Description" }];


function HomePage() {

    const listTools = toolsData.map(item => {
        return <>
            <br /><sideLAboutTitle title={item.title} content={item.description} />
        </>
    })

    return <>
        <Layout>
            <PostTitle breadcrumb>Tools</PostTitle>
            <div className="pt-10 text-lg px-2">
                <p>
                    The Student Leadership Council (SLC) is a student-led organization that aims to create a collaborative environment for students to share their skills and talents. We encourage the sharing of tools and resources  The Tech Department is an extension of SLC, and as such, they are commited to create tools for students to use for free with no intention of getting any revenue from it!</p>
                <p></p>
                {listTools}
            </div>
        </Layout>
    </>
}

export default HomePage