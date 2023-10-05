import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head';
import Link from 'next/link'; // Import Link from Next.js
import { Card } from 'react-bootstrap';


export default function LayoutOne(props) {
    return (
        <>
            <Head>
                <link rel="icon" href="slc-icon32x32.ico" />
                <title>Koppelman Student Leadership Council</title>
                <meta name="keywords" content="slc, brooklyn, brooklyn college, cuny, Koppelman student leader council, brooklyn student leadership council, brooklyn college business, brooklyn college leadership, koppelman school of business" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="The SLC aims to inspire and encourage students to take the lead in their personal and professional lives. We aim to ensure students are equipped with the resources and knowledge they need to dive into their professional careers." />
                <meta name="author" content="Koppelman Student Leadership Council" />
            </Head>
            <Header />
            <Link href="/events/business-matters-2023/">
                <a>
                    <Card>
                        <Card.Body>
                            <Card.Title>Upcoming Event: October 31, Nov 2, 7 & 9</Card.Title>
                            <Card.Text>
                                Join the Koppelman School of Business for our 4-Day Event discussion on Generative AI and Business! 🚀

                                Get ready for an enlightening 4-day journey diving into the future of business with Generative AI at the helm! Our theme centers around the transformative power that Generative AI brings to the business landscape and beyond.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </Link>

                <div className="container mx-auto">
                    {props.children}
                </div>

            <Footer />
        </>
    )
}