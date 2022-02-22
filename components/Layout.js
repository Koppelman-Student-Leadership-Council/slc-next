import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head';


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
            <body className="pb-5" >
                <Header />
                <div className=" container mx-auto px-5">
                    {props.children}
                </div>
            </body>  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
               ></script>
            <Footer />


        </>
    )
}