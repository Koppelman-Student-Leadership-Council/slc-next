import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";

import CoverImage from '../../components/cover-image'

function HomePage() {
    return <>
        <Layout>
            <PostTitle breadcrumb>Snack and Chats: Stock Data Automation</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0 d-flex justify-content-center">
                <CoverImage src="\assets\programs\business-matters.png" />
            </div>
            <div className="">
                In this Snack and Chats, Join us to learn how to automatically produce a spreadsheet with the finacial information aboout your favorite stocks.

                The application and entry will be completly free of cost. Feel free to bring your 
                computer device if you would like to learn about the code behind it.

            </div>
        </Layout>
    </>
}

export default HomePage