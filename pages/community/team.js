import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import MemberCard from '../../components/MemberCard';

function HomePage({ membersData }) {
    console.log(membersData)
    return <>
        <Layout>

            <PostTitle breadcrumb>Our Team</PostTitle>
            <div className="row">

                {membersData.map((member) => {
                    return <div className="col-md-4 col-sm-5">

                        <MemberCard image={member.image_link} name={member.name} description={member.description} title={member.title} department={member.department} /></div>
                })}
            </div>
        </Layout>
    </>
}

export async function getStaticProps() {
    const res = await fetch('https://admin.brooklynslcouncil.com/public/api/team')
    const membersData = await res.json()
    return {
        props: {
            membersData,
        },
    }
}

export default HomePage