import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import Partnership from "../../components/partnership";

function HomePage({ initialClubsData }) {
    const [clubsData, setClubsData] = useState(initialClubsData);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://admin.brooklynslcouncil.com/public/api/clubs');
                const data = await res.json();
                setClubsData(data);
            } catch (error) {
                console.error("Failed to fetch clubs data:", error);
            }
        }

        fetchData();
    }, []);

    console.log(clubsData);

    return (
        <Layout>
            <PostTitle breadcrumb>Our Clubs</PostTitle>
            <div className="grid justify-items-center pt-10 pb-28 gap-y-8 sm:grid-cols-2 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
                {clubsData.map((club) => (
                    <Partnership key={club.image_link_overwrite ?? club.image_link} 
                                 title={club.title} 
                                 link={club.link} 
                                 imageLink={club.image_link} />
                ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://admin.brooklynslcouncil.com/public/api/clubs');
    const initialClubsData = await res.json();
    return {
        props: {
            initialClubsData,
        },
    }
}

export default HomePage;
