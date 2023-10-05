import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import CoverImage from '../../components/cover-image';
import { Container } from 'react-bootstrap';



function HomePage() {
    return <>
        <div className="group-h1">
            <Layout>
                <PostTitle breadcrumb>Generative AI</PostTitle>
                <div className="pt-10 grid justify-items-center">
                    <div className="card-zoom-h1 justify-self-center">

                        <CoverImage src="/assets/promotion/businessmatters2023\post.png" />

                        {/* <CoverImage src="/assets/promotion/businessmatters.jpg" /> */}
                    </div>

                    <Container className="text-lg px-10 text-left">
                        <p>
                            <strong>Join the Koppelman School of Business for our 4-Day Event discussion on Generative AI and Business! 🚀</strong>
                        </p>
                        <p>
                            Get ready for an enlightening 4-day journey diving into the future of business with Generative AI at the helm! Our theme centers around the transformative power that Generative AI brings to the business landscape and beyond.
                        </p>
                        <p>
                            <strong>Event Breakdown:</strong>
                        </p>
                        {/* Align left */}
                        <ul className="" >
                            <li>☑️ <strong>Day 1 to 3:</strong> Engage with Key Speakers who are pioneers in the industry, providing invaluable insights into the innovative realm of Generative AI.</li>
                            <li>☑️ <strong>Day 4:</strong> Participate in a dynamic panel discussion featuring top industry experts, unraveling the profound shifts Generative AI is fueling in the business sphere.</li>
                        </ul>
                        <p>
                            <strong>Why Should You Attend?</strong>
                        </p>
                        <ul >
                            <li>🌟 Connect and collaborate with executives, recruiters, and peers in the business world.</li>
                            <li>🌟 Gain deep insights into how Generative AI is revolutionizing the way business is conducted.</li>
                            <li>🌟 Discover potential career opportunities and expand your professional network.</li>
                            <li>🌟 Participate in lively discussions and share your perspectives on this groundbreaking theme.</li>
                        </ul>
                        <p>
                            <strong>Hurry, Spaces are Limited!</strong>
                        </p>
                        <p>
                            Don't miss out on this incredible opportunity to immerse yourself in the world of Generative AI and Business. <em>Space is limited, so act now to secure your spot and be a part of this knowledge-packed event!</em>
                        </p>
                        <p>
                            <strong><a href="https://docs.google.com/forms/d/1x0jGe3FV3IB6oMiUKOV8y1iYDRGXAB6WX0bUydp3Dk8/viewform?edit_requested=true">Use the following Google forms and share with your community, friends, clubs, and more.</a></strong>
                        </p>

                        <iframe src="https://docs.google.com/forms/d/1x0jGe3FV3IB6oMiUKOV8y1iYDRGXAB6WX0bUydp3Dk8/viewform?edit_requested=true" frameborder="0" height={1000} width={"100%"}></iframe>
                    </Container>

                    <body>
                        <div className="pb-8 text-lg ml:text-center px-10">
                            {/* <PostTitle>Business Matters Spring 2023 </PostTitle> */}
                        </div>

                        <div class="pb-8 grid grid-cols-3 gap-4 ">

                            <img class="rounded-lg" src="/assets/promotion/B-M2022.jpg" width="400" height="500" />
                        </div>
                    </body>

                </div>


            </Layout>

        </div>
    </>
}

export default HomePage