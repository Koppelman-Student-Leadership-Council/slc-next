import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import Partnership from "../../components/partnership";

import Clubs from '../../data/clubs.json';

function HomePage() {
    console.log(Clubs);
    return <>
        <Layout>
            <PostTitle breadcrumb>Our Clubs</PostTitle>
            <div className="row">
                {Clubs.map((club)=>{
                   return  <Partnership title={club["title"]} link={club['link']} imageLink={"/assets/clubs/resized/"+club['imagename']+".png"} />
                })}
            </div>
        </Layout>
    </>
}

export default HomePage