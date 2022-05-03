import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import FullDetailAbout from "../../components/full-detail-about"
import SideRightAboutTitle from "../../components/sider-about-title"
import SideTitleLink from "../../components/sidel-about-linktitle"



const toolsData = [
    { title: "Stock Automata", description: "Stock Automata is a stock market data collection application that you can use for free when deciding what stocks to buy.", image:"/assets/programs/stock-automata-pore.png", href:"https://stock.brooklynslcouncil.com/" },
    { title: "QR Creator", description: "Create QR codes for free. Useful when hosting events and the like.", image:"/assets/programs/qr-generator.png", href:"https://qr.brooklynslcouncil.com/" }

];


function HomePage() {

    const listTools = toolsData.map(item => {
        return <>
            <br /><SideTitleLink title={item.title} content={item.description} image={item.image} href={item.href} />
        </>
    })

    return <>
        <Layout>
            <PostTitle breadcrumb>Tools</PostTitle>
            <div className="pt-10 text-lg px-2">
                <p>
                    The Student Leadership Council (SLC) is a student-led organization that aims to create a collaborative environment for students to share their skills and talents. We encourage the sharing of tools and resources  The Tech Department is an extension of SLC, and as such, they are commited to create tools for students to use for free!</p>
                <p></p>
                {listTools}
            </div>
        </Layout>
    </>
}

export default HomePage