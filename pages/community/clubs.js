import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import Partnership from "../../components/partnership";

// import Clubs from '../../data/clubs.json';

function HomePage({clubsData}) {
    console.log(clubsData);
    return <>
        <Layout>
            <PostTitle breadcrumb>Our Clubs</PostTitle>
            <div className="row">
                {clubsData.map((club)=>{
                   return  <Partnership key={club["image_link"]} title={club["title"]} link={club['link']} imageLink={club["image_link"]} />
                })}
            </div>
        </Layout>
    </>
}

export async function getStaticProps() {
    const res = await fetch('https://admin.brooklynslcouncil.com/public/api/clubs')
    const clubsData = await res.json()
    return {
        props: {
            clubsData,
        },
    }
}


export default HomePage