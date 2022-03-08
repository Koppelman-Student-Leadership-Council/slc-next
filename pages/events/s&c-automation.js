import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";

import CoverImage from '../../components/cover-image'

function HomePage() {
    return <>
        <Layout>
        
            <PostTitle breadcrumb>Stock Data Automation</PostTitle>
            Snack and Chats.
            <div className="mb-8 md:mb-16 sm:mx-0 d-flex justify-content-center">
                <CoverImage src="\assets\programs\s&c-automation.png" />
            </div>
            <div className="">
                Next event: March 16, 2022
                
                In this Snack and Chats, Join us to learn how to automatically produce a spreadsheet with the finacial information aboout your favorite stocks.

                The application and entry will be completly free of cost. Feel free to bring your 
                computer device if you would like to learn about the code behind it.
                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoLx0Olz43PXMuB29AiDS3-pir6P0kfmcR4CWWFvo7qSM2Gw/viewform?usp=sf_link" target="_blank" rel="noreferrer" > RSVP Here </a>

            </div>
        </Layout>
    </>
}

export default HomePage